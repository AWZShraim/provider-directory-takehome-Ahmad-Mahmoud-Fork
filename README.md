# THVC Provider Directory

Provider listing and provider profile screens, built with React and CSS Modules.

## Running it

npm install

npm start

The template uses `react-scripts` 4, which fails on Node 17+ with an OpenSSL
error, so I added `--openssl-legacy-provider` to the start and build scripts.

## Notes

- Both screens use the provided `api.js`, including its request delay. The
  profile fetches by id, since the list endpoint omits location, education,
  and languages.
- Availability codes (`tomorrow`, `next-week`) map to the display strings from
  the design. The API field is spelled `availabilty`; I matched it rather than
  changing the provided file.
- `avatarUrl` is empty for every record, so photos fall back to a placeholder
  from the design file.
- Professional titles ("Registered Social Worker") aren't in the API — `title`
  holds credentials, so I sourced them from each bio into a lookup keyed by id.
- Count line is derived from the data rather than the design's hardcoded
  "17 providers in Ontario", since two providers are in Quebec.
- `react-router-dom` pinned to v6; v7 requires React 18.
