# Version number generator action

This action intends to generate a timestamp based build number, handy for publishing builds.

## Getting Started

Use as a step like the following:

```yaml
jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - name: Checkout
      uses: actions/checkout@v1
    - name: Generate version
      uses: thedigitalstudio/generate-version@master
      with:
        majeure: "v19-08"
    - name: Build the container
      run: |
        docker build -t myrepo/myimage:latest --build-arg VERSION=${VERSION} .
        docker tag myrepo/myimage:latest myrepo/myimage:${MAJEURE}
        docker tag myrepo/myimage:latest myrepo/myimage:${VERSION}
```

This will make the two following environment variables accessible from subsequent steps

`${MAJEURE} : v19-08`

`${VERSION} : v19-08.08-29.182327`

Those variables will also be available from the workflow YAML itself using the syntax ${{ steps.<step id>.outputs.VERSION }}