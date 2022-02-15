import React, {ChangeEventHandler, useState} from 'react';
import styles from './footer.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import {useControlsContext} from '../../store/controls/provider';
import {
  controlsActions,
  controlsTransientActions,
} from '../../store/controls/actions';
import useClickOutside from '../../hooks/useClickOutside';

interface PlaybackControls {
  icons: string[]
  label: string
  action: keyof typeof controlsTransientActions
}

const playbackControls: PlaybackControls[] = [
  {
    icons: ['/icons/icon-previous.svg'],
    label: 'go to start',
    action: 'resetVisualization',
  },
  {
    icons: ['/icons/icon-rewind.svg'],
    label: 'previous',
    action: 'stepVisualizationBackward',
  },
  {
    icons: [
      '/icons/icon-play.svg',
      '/icons/icon-pause.svg',
      '/icons/icon-restart.svg',
    ],
    label: 'play/pause/restart',
    /* 👇🏾 used when playback position === playback length */
    action: 'resetVisualization',
  },
  {
    icons: ['/icons/icon-fast-forward.svg'],
    label: 'next',
    action: 'stepVisualizationForward',
  },
  {
    icons: ['/icons/icon-next.svg'],
    label: 'go to end',
    action: 'playWithoutVisualization',
  },
];

/**
 * Header component hosting external links
 * @return {JSX.Element}
 * */
function Footer(): JSX.Element {
  const {state, dispatch} = useControlsContext();
  const {
    playbackLength,
    playbackPosition,
    canPlayVisualization,
  } = state;
  const [showPlaybackMenu, setShowPlaybackMenu] = useState<boolean>(false);

  const handleMenuButtonClick = () => {
    setShowPlaybackMenu((prev) => !prev);
  };

  const playOrPauseVisualization = () => {
    dispatch(controlsActions.playVisualization(!canPlayVisualization));
  };

  const quickToggleControl = (
      action: keyof typeof controlsTransientActions,
  ) => {
    dispatch(controlsTransientActions[action](true));
    window.setTimeout(() => {
      dispatch(controlsTransientActions[action](false));
    }, 50);
  };

  const selectPlaybackPosition: ChangeEventHandler<HTMLInputElement> = (
      event,
  ) => {
    const position = parseInt(event.target.value);
    dispatch(controlsActions.setPlaybackPosition(position));
  };

  const handleControlAction = (control: PlaybackControls): void => {
    if (control.icons.length > 1) {
      if (playbackPosition === playbackLength) {
        /* control.action === resetVisualization */
        quickToggleControl(control.action);

        setTimeout(() => {
          playOrPauseVisualization();
        }, 100);
      } else {
        playOrPauseVisualization();
      }

      playOrPauseVisualization();
    } else {
      quickToggleControl(control.action);
    }
  };

  /**
   * Uses the play state and the icons array to determine what icon to use.
   *
   * All this gbege cos I wan write dry code by force 🥲
   * Don't be like me, prefer AHA over DRY.
   *
   * @param {PlaybackControls} control - the control data for the current button
   * @return {string}
   * */
  const selectControlIcon = (control: PlaybackControls): string => {
    /* if only one icon, use that. this also means it's not the play button */
    return control.icons.length < 2 ? control.icons[0] :
      /* below this point means you're dealing with the play button */
      /* if the viz is playing, show pause icon */
      canPlayVisualization ? control.icons[1] :
        /* if viz has ended, show restart icon */
        playbackPosition === playbackLength ? control.icons[2] :
          /* otherwise show play icon */
          control.icons[0];
  };

  useClickOutside('footer-component',
      showPlaybackMenu,
      () => setShowPlaybackMenu(false),
  );

  return (
    <footer className={styles.footerComponent} id="footer-component">
      <button
        className={cn(styles.playbackMenuButton, {
          [styles.active]: showPlaybackMenu,
        })}
        onClick={handleMenuButtonClick}
        aria-label="toggle control menu"
      >
        <span>
          <Image
            src="/icons/icon-settings.svg"
            alt="..."
            width={12}
            height={12}
          />

          <span>
            Playback Controls
          </span>
        </span>
      </button>

      <section className={cn(styles.playbackControls, {
        [styles.active]: showPlaybackMenu,
      })}>
        <div className={cn(styles.playbackControls__buttons)}>
          {playbackControls.map((control) => (
            <button
              key={control.label}
              onClick={() => handleControlAction(control)}
              aria-label={control.label}
            >
              <Image
                src={selectControlIcon(control)}
                alt={control.label}
                width={15}
                height={15}
              />
            </button>
          ))}
        </div>

        <label
          htmlFor="playbackSeek"
          className={cn(styles.playbackControls__seekContainer)}
        >
          <input
            type="range"
            id="playbackSeek"
            min={0}
            max={playbackLength}
            step={1}
            value={playbackPosition}
            onChange={selectPlaybackPosition}
            aria-label="playback seek"
          />
        </label>
      </section>

      <p className={cn(styles.credits)}>
        Made with ❤️ by
        {' '}
        <a
          href="https://github.com/Chunxei/sorting-algorithm-visualizer"
          rel="noopener noreferrer"
          target="_blank"
        >
          Mel Jatau
        </a>
      </p>
    </footer>
  );
}

export default Footer;
