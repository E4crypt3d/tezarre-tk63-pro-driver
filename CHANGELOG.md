# Changelog

All notable changes to the Tezarre TK-63 Pro Driver, newest first.

This project began as a community recovery of the manufacturer's 1.1.31 build, so the last
section below is that original build and everything above it is work done here since. No
release has been published from this repository yet, which is why all of it is still listed
as unreleased. Entries describe what changed for someone using the app.

## [Unreleased]

### Added

* **Two more lighting effects on the TK-63 Pro: "Colorful vertical and horizontal" and
  "Emerge in endlessly".** The keyboard's firmware already supported both — they simply
  weren't offered in the app's effect list. They appear with the rest of the effects, with
  the same colour, brightness and speed controls, plus a direction choice for the fireworks
  effect.
* **A GitHub link on the Support tab**, so you can reach the project's source and issue
  tracker from inside the app.

### Changed

* **Changing a lighting effect no longer freezes the window.** The effect you pick appears
  immediately and is sent to the keyboard in the background, instead of holding the whole
  app behind a loading overlay while the keyboard is being written. Clicking through
  effects quickly no longer piles up a queue of writes — only the last one you settle on is
  sent. If the keyboard refuses a setting, the app switches back to the effect that was
  actually running rather than leaving an unapplied one selected.
* **Lower CPU and memory use during music-follow and screen-colour effects.** Those effects
  stream data continuously while they run, and each frame carried unnecessary bookkeeping.
  All effects work exactly as before; the difference shows up as steadier resource use over a
  long session.
* **Faster startup and faster profile switching.** Loading a profile no longer fetches the
  custom per-key picture unless that picture is the effect currently in use, which removes
  several slow round-trips with the keyboard from every start and every profile change.
* **A snappier lighting page.** The effect list and the keyboard image no longer redo their
  setup work on every screen refresh.
* **Your existing settings carry over.** The app keeps the original application identity (and
  therefore the same data folder), so profiles, macros and preferences created in the stock
  driver are still found after switching to this build.
* **Building from source works on current systems.** The project now installs and runs on
  current Node.js releases rather than requiring Node 12, and includes a one-command native
  module rebuild for the bundled Electron runtime, plus Linux device permission rules so the
  keyboard can be opened without running the app as root.

### Fixed

* **The app now starts on Windows.** The bundled 32-bit helper library and the Electron
  runtime now match, and prebuilt native modules ship with the repository, so a fresh
  checkout launches without a C++ build toolchain. Previously the app could fail with
  "Win32 error 193" and a black window.
* **A loading indicator that could get stuck — or disappear too early.** Operations could
  clear each other's "busy" state, leaving the window spinning after the work had finished,
  or hiding the spinner while something was still running.
* **The window no longer opens with developer tools covering it.** They are opt-in in
  development via `TEZARRE_DEVTOOLS=1`.

## 1.1.31 — original manufacturer release (2022)

The last build Tezarre shipped for the TK-63 Pro, recovered here from the published bundles
because the vendor never released the source and the original download is gone. It is the
starting point for this project: device detection, key remapping and the Fn layer, lighting
and effects, macros and profiles (including per-app profiles), and settings saved to a local
database that survive restarts.
