function StringCropper(input) {
  let croppedText = input
    .replace(/\s+/g, '')
    .replace(/[()]/g, '')
    .replace(/[^DBEFLMRSUXYZ2']/g, '')
    .replace(/([DBEFLMRSUXYZ])2'/g, (_, p1) => p1 + `'` + p1 + `'`)
    .replace(/([DBEFLMRSUXYZ])2(?!')/g, (_, p1) => p1 + p1)

  return croppedText
}

export default StringCropper



