const ICONS = {};


ICONS.NAMES = {
  ARROW_RIGHT: 'ArrowRight',
  SENSOR: 'Sensor',
  SEND: 'Send',
  CHROME: 'Chrome',
  FIREFOX: 'Firefox'
};


ICONS.PATHS = {
  [ICONS.NAMES.ARROW_RIGHT]: [
    'M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,0-13.972,2.788-19.044,7.856l-16.132,16.136c-5.068,5.064-7.86,11.828-7.86,19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,0,219.15,0,234.002v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,388.926c-5.068,5.072-7.86,11.652-7.86,18.864c0,7.204,2.792,13.88,7.86,18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z'
  ],
  [ICONS.NAMES.SENSOR]: [
    'm83.253906 365c4.375 0 8.460938-1.730469 11.5-4.878906l22.726563-23.507813c5.996093-6.203125 6.046875-15.925781.117187-22.132812-15.632812-16.367188-28.132812-35.203125-37.148437-55.980469-10.449219-24.074219-15.75-49.644531-15.75-76s5.296875-51.925781 15.746093-76c9.019532-20.777344 21.519532-39.613281 37.148438-55.980469 5.929688-6.207031 5.878906-15.929687-.117188-22.132812l-22.722656-23.507813c-3.042968-3.148437-7.125-4.878906-11.511718-4.878906-4.332032.00390625-8.546876 1.796875-11.5625 4.921875-17.175782 17.804687-31.632813 37.933594-42.976563 59.820313-1.902344 3.675781-.46875 8.203124 3.210937 10.109374 3.679688 1.90625 8.203126.46875 10.109376-3.210937 10.671874-20.601563 24.285156-39.542969 40.453124-56.304687.402344-.417969 1.082032-.457032 1.492188-.035157l22.726562 23.511719c.371094.382812.394532.988281.050782 1.34375-16.855469 17.652344-30.335938 37.964844-40.058594 60.371094-11.273438 25.972656-16.988281 53.550781-16.988281 81.972656s5.714843 56 16.988281 81.972656c9.722656 22.40625 23.203125 42.714844 40.0625 60.367188.339844.359375.316406.964844-.054688 1.347656 0 0-22.652343 23.433594-22.726562 23.511719-.410156.425781-1.089844.382812-1.492188-.035157-20.074218-20.8125-36.097656-44.824218-47.621093-71.375-13.175781-30.359374-19.855469-62.585937-19.855469-95.789062 0-28.261719 4.882812-55.964844 14.507812-82.34375 1.421876-3.890625-.582031-8.199219-4.472656-9.617188-3.890625-1.421874-8.195312.582032-9.617187 4.472657-10.230469 28.03125-15.417969 57.46875-15.417969 87.488281 0 35.269531 7.097656 69.507812 21.097656 101.761719 12.238282 28.199219 29.257813 53.710937 50.582032 75.816406 3.015624 3.125 7.230468 4.917969 11.574218 4.921875zm0 0',
    'm152.382812 293.46875c4.386719 0 8.480469-1.734375 11.527344-4.890625l22.761719-23.542969c5.785156-5.980468 6.011719-15.511718.515625-21.695312-14.886719-16.753906-23.085938-38.363282-23.085938-60.839844s8.199219-44.082031 23.089844-60.84375c5.492188-6.179688 5.265625-15.710938-.519531-21.691406l-22.761719-23.542969c-3.046875-3.15625-7.140625-4.890625-11.527344-4.890625-4.457031 0-8.738281 1.875-11.75 5.148438-26.589843 28.890624-41.234374 66.46875-41.234374 105.820312s14.644531 76.929688 41.234374 105.820312c3.011719 3.273438 7.292969 5.148438 11.75 5.148438zm-.714843-206.632812c.390625-.425782 1.066406-.398438 1.460937.007812l22.761719 23.542969c.355469.371093.394531.957031.085937 1.304687-17.332031 19.507813-26.875 44.65625-26.875 70.808594s9.542969 51.300781 26.875 70.804688c.308594.347656.269532.933593-.085937 1.304687l-22.761719 23.546875c-.398437.40625-1.070312.433594-1.460937.007812-24.03125-26.113281-37.269531-60.089843-37.269531-95.664062s13.238281-69.550781 37.269531-95.664062zm0 0',
    'm440.320312 4.921875c-3.015624-3.128906-7.234374-4.921875-11.574218-4.921875-4.375 0-8.457032 1.730469-11.5 4.878906l-22.726563 23.507813c-5.996093 6.203125-6.046875 15.921875-.117187 22.132812 15.632812 16.367188 28.132812 35.203125 37.148437 55.976563 10.453125 24.078125 15.75 49.648437 15.75 76.003906s-5.296875 51.925781-15.746093 76c-9.019532 20.777344-21.519532 39.613281-37.152344 55.980469-5.929688 6.207031-5.878906 15.929687.117187 22.132812l22.726563 23.507813c3.042968 3.148437 7.125 4.878906 11.5 4.878906 4.339844 0 8.558594-1.792969 11.574218-4.921875 21.328126-22.105469 38.34375-47.617187 50.585938-75.820313 13.996094-32.25 21.09375-66.488281 21.09375-101.757812s-7.097656-69.507812-21.097656-101.761719c-12.238282-28.199219-29.257813-53.710937-50.582032-75.816406zm36.824219 273.367187c-11.523437 26.550782-27.542969 50.5625-47.621093 71.375-.382813.398438-1.074219.464844-1.492188.03125l-22.726562-23.507812c-.371094-.382812-.394532-.988281-.050782-1.347656 16.855469-17.652344 30.335938-37.960938 40.058594-60.367188 11.273438-25.972656 16.988281-53.550781 16.988281-81.972656s-5.714843-56-16.988281-81.972656c-9.722656-22.40625-23.203125-42.71875-40.058594-60.367188-.34375-.359375-.320312-.964844.050782-1.347656 0 0 22.695312-23.476562 22.726562-23.507812.414062-.425782 1.09375-.382813 1.492188.03125 20.078124 20.8125 36.097656 44.824218 47.621093 71.375 13.175781 30.359374 19.855469 62.585937 19.855469 95.789062s-6.679688 65.429688-19.855469 95.789062zm0 0',
    'm397.007812 231.753906c3.972657 1.164063 8.140626-1.117187 9.300782-5.09375 4.175781-14.261718 6.292968-29.121094 6.292968-44.160156 0-39.351562-14.644531-76.929688-41.234374-105.820312-2.960938-3.21875-7.171876-5.09375-11.550782-5.148438-4.390625-.050781-8.671875 1.726562-11.726562 4.886719l-22.761719 23.542969c-5.785156 5.984374-6.011719 15.511718-.519531 21.695312 14.890625 16.757812 23.089844 38.367188 23.089844 60.84375s-8.199219 44.085938-23.089844 60.839844c-5.492188 6.183594-5.265625 15.710937.515625 21.695312l22.761719 23.542969c3.011718 3.117187 7.203124 4.890625 11.535156 4.890625h.191406c4.382812-.054688 8.59375-1.933594 11.554688-5.148438 9.085937-9.871093 16.851562-20.8125 23.078124-32.515624 1.949219-3.660157.5625-8.199219-3.097656-10.148438-3.65625-1.941406-8.199218-.558594-10.144531 3.101562-5.628906 10.578126-12.652344 20.472657-20.875 29.402344-.183594.203125-.417969.304688-.699219.308594-.230468.003906-.5-.050781-.757812-.316406l-22.761719-23.542969c-.355469-.371094-.398437-.957031-.085937-1.304687 17.332031-19.503907 26.875-44.652344 26.875-70.804688s-9.542969-51.296875-26.875-70.804688c-.308594-.347656-.269532-.933593.085937-1.304687 0 0 22.761719-23.542969 22.761719-23.546875.390625-.402344 1.070312-.429688 1.460937-.007812 24.03125 26.113281 37.269531 60.089843 37.269531 95.664062 0 13.613281-1.914062 27.054688-5.6875 39.949219-1.164062 3.976562 1.117188 8.140625 5.09375 9.304687zm0 0',
    'm256 254.609375c39.761719 0 72.109375-32.347656 72.109375-72.109375s-32.347656-72.109375-72.109375-72.109375-72.109375 32.347656-72.109375 72.109375 32.347656 72.109375 72.109375 72.109375zm0-129.21875c31.492188 0 57.109375 25.617187 57.109375 57.109375s-25.621094 57.109375-57.109375 57.109375-57.109375-25.617187-57.109375-57.109375 25.621094-57.109375 57.109375-57.109375zm0 0'
  ],
  [ICONS.NAMES.SEND]: [
    'm21 116.572h32c11.598 0 21-9.402 21-21s-9.402-21-21-21h-32c-11.598 0-21 9.402-21 21s9.402 21 21 21z',
    'm74 308.905c0-11.598-9.402-21-21-21h-32c-11.598 0-21 9.402-21 21s9.402 21 21 21h32c11.598 0 21-9.403 21-21z',
    'm500.159 237.012-362.666-192c-13.976-7.396-30.826 2.756-30.826 18.56v85.667h-63.829c-11.387 0-21.085 8.854-21.49 20.233-.425 11.947 9.134 21.767 20.986 21.767h64.333v10.982c0 12.191 9.139 22.444 21.249 23.842l172.855 19.945c11.366 1.311 11.366 17.818 0 19.13l-172.855 19.945c-12.11 1.397-21.249 11.651-21.249 23.842v53.649h-63.829c-11.387 0-21.085 8.854-21.49 20.233-.425 11.947 9.134 21.767 20.986 21.767h64.333v46.495c0 11.101 8.985 18.833 20.014 17.566 11.054-1.269-31.822 20.069 373.478-194.502 14.875-7.877 14.881-29.243 0-37.121z'
  ],
  [ICONS.NAMES.CHROME]: [
    {
      d: 'M493.248,160.021H256.021c-53.019-0.052-96.042,42.886-96.095,95.905 c-0.016,16.468,4.204,32.663,12.255,47.028L53.568,99.434c86.393-111.815,247.073-132.423,358.888-46.03 C448.365,81.149,476.249,117.946,493.248,160.021z',
      fill: '#F44336'
    },
    {
      d: 'M512.021,256.021c-0.118,141.336-114.664,255.882-256,256c-10.704,0.04-21.397-0.673-32-2.133 l115.2-205.867c26.403-45.964,10.664-104.625-35.2-131.2c-14.521-8.407-31.008-12.824-47.787-12.8h237.013 C505.705,190.491,512.083,223.103,512.021,256.021z',
      fill: '#FFC107'
    },
    {
      d: 'M339.221,304.021l-115.2,205.867h-0.213C83.62,492.176-15.666,364.172,2.046,223.984 C7.779,178.609,25.57,135.6,53.568,99.434l118.613,203.52l0.64,1.067c26.451,45.95,85.143,61.757,131.093,35.307 C318.592,330.879,330.773,318.698,339.221,304.021z',
      fill: '#4CAF50'
    },
    {
      d: 'M339.221,304.021c-26.451,45.95-85.143,61.757-131.093,35.307 c-14.677-8.449-26.858-20.63-35.307-35.307l-0.64-1.067c-25.921-46.251-9.439-104.758,36.812-130.679 c14.366-8.051,30.561-12.271,47.028-12.255h0.213c16.779-0.024,33.266,4.393,47.787,12.8 C349.886,199.396,365.624,258.057,339.221,304.021z',
      fill: '#F44336'
    },
    {
      d: 'M339.221,304.021c-26.451,45.95-85.143,61.757-131.093,35.307 c-14.677-8.449-26.858-20.63-35.307-35.307l-0.64-1.067c-25.921-46.251-9.439-104.758,36.812-130.679 c14.366-8.051,30.561-12.271,47.028-12.255h0.213c16.779-0.024,33.266,4.393,47.787,12.8 C349.886,199.396,365.624,258.057,339.221,304.021z',
      fill: '#2196F3'
    },
    {
      d: 'M255.659,362.688c-18.598-0.002-36.868-4.903-52.971-14.208 c-16.237-9.391-29.722-22.883-39.104-39.125c-29.455-51.018-11.975-116.254,39.043-145.709c16.233-9.372,34.65-14.301,53.395-14.291 c58.91-0.046,106.704,47.674,106.749,106.584c0.015,18.752-4.915,37.176-14.291,53.416l0,0 C329.256,342.405,293.893,362.724,255.659,362.688z M256.213,170.688c-30.613-0.163-58.955,16.13-74.219,42.667 c-23.564,40.86-9.543,93.087,31.317,116.651s93.087,9.543,116.651-31.317l0,0c23.564-40.814,9.58-93.003-31.234-116.568 c-12.922-7.46-27.574-11.402-42.494-11.432H256.213z',
      fill: '#FAFAFA'
    }
  ]
};

ICONS.VIEWBOX = {
  [ICONS.NAMES.ARROW_RIGHT]: '0 0 492.004 492.004',
  [ICONS.NAMES.SENSOR]: '0 -73 512 512',
  [ICONS.NAMES.SEND]: '0 0 511.318 511.318',
  [ICONS.NAMES.CHROME]: '0 0 512.023 512.023'
};


export default ICONS;