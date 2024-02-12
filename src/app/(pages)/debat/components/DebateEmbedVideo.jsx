import React from 'react'

export default function DebateEmbedVideo ({embed}) {
  return (
    <iframe
  id="ytplayer"
  type="text/html"
  width="640"
  height="360"
  src={embed}
  frameborder="0"
  referrerpolicy="no-referrer"
></iframe>

  )
}
