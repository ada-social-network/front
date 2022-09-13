#!/usr/bin/env bash

# check argument count ($#) is equal 0
if [ $# -eq 0 ]
  then
    printf "No arguments supplied.\n\n"
    printf "Please provide one argument with the expected version.\n"
    printf "For example: \"./scripts/release.sh v1.0.0\"\n"
    exit 1
fi

VERSION="${1}"
LATEST="latest"
IMAGE_NAME="ghcr.io/ada-social-network/front"

IMAGE_LATEST="${IMAGE_NAME}:${LATEST}"
IMAGE_VERSION="${IMAGE_NAME}:${VERSION}"

printf "Build image with TAG:\n"
printf "  - latest: %s\n" "${IMAGE_LATEST}"
printf "  - version: %s\n" "${IMAGE_VERSION}"

printf "\n--- Start Docker build\n\n"
docker build . -t "${IMAGE_LATEST}" -t "${IMAGE_VERSION}" --build-arg VERSION="${VERSION}"
printf "\n\n--- End Docker build\n"

printf "\nYou can now start using your image by running the following command\n\n"
printf "  docker run --rm %s" "${IMAGE_VERSION}"

printf "\n\nYou can push your images by running the following command:\n\n"
printf "  docker push %s\n" "${IMAGE_VERSION}"
printf "  docker push %s\n" "${IMAGE_LATEST}"

exit 0
