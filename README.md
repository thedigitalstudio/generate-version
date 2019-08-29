# Version number generator action

This action intends to generate a timestamp based build number, handy for pusblishing builds.

## Getting Started

Use as a step like the following:

```yaml
jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v1
    - uses: thedigitalstudio/generate-version@master
      with:
        majeure: "v19-08"
```

This will make the two following environment variables accessible from subsequent steps`

`${MAJEURE} : v19-08`

`${VERSION} : v19-08.08-29.182327`