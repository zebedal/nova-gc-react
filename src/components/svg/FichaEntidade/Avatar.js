import { motion } from "framer-motion"


const variants = {
  start: {
    scale: 0
  },
  end: {
    scale: 1,
    transition: {
      duration: 0.5
    }
  }
}




const Avatar = ({ width }) => {

  const svgStyle = {
    maxWidth: '126px',
    maxHeight: '126px',
    width: width ? `${width}px` : '50%'
  }

  return (

    <motion.svg /* width="126.771" height="126.771" */ style={svgStyle} viewBox="0 0 126.771 126.771" variants={variants} initial="start" animate="end" preserveAspectRatio="none">
      <defs>
        <clipPath id="clipPath">
          <path d="M63.386,0A63.386,63.386,0,1,1,0,63.386,63.318,63.318,0,0,1,63.386,0Z" />
        </clipPath>
      </defs>
      <g >
        <g >
          <path d="M63.386,0A63.386,63.386,0,1,1,0,63.386,63.318,63.318,0,0,1,63.386,0Z" fill="#f2f4f9" />
        </g>
      </g>
      <g>
        <g clipPath="url(#clipPath)">
          <g transform="translate(25.75 93.098)">
            <path d="M13,80.674C13,62.252,29.837,47,50.635,47h0c20.6,0,37.635,15.252,37.635,33.674" transform="translate(-13 -47)" fill="#c20707" />
          </g>
        </g>
        <g clipPath="url(#clipPath)">
          <g transform="translate(51.543 87.337)">
            <ellipse cx="12.17" cy="11.454" rx="12.17" ry="11.454" transform="translate(0 0)" fill="#fff" />
          </g>
        </g>
        <g clipPath="url(#clipPath)">
          <g transform="translate(55.264 89.73)">
            <path d="M44.143,45.3v9.112a8.158,8.158,0,0,1-8.121,8.121,8.425,8.425,0,0,1-5.744-2.377A8.823,8.823,0,0,1,27.9,54.412V45.3H44.143Z" transform="translate(-27.9 -45.3)" fill="#f7be8f" />
          </g>
        </g>
        <g clipPath="url(#clipPath)">
          <g transform="translate(39.616 45.558)">
            <path d="M52.287,73.114A24.782,24.782,0,0,1,43.77,74.5a24.782,24.782,0,0,1-8.517-1.387L31.885,71.53A22.707,22.707,0,0,1,20.2,55.287a18.126,18.126,0,0,1-.2-3.169V23H67.539V52.118a17.039,17.039,0,0,1-.2,3.169,20.141,20.141,0,0,1-2.971,8.121,21.623,21.623,0,0,1-8.716,8.121C54.466,72.124,53.476,72.52,52.287,73.114Z" transform="translate(-20 -23)" fill="#fad3a1" />
          </g>
        </g>
        <g clipPath="url(#clipPath)">
          <g transform="translate(49.52 63.386)">
            <path d="M27.971,32A2.971,2.971,0,1,1,25,34.971,3.046,3.046,0,0,1,27.971,32Z" transform="translate(-25 -32)" fill="#262647" />
          </g>
        </g>
        <g clipPath="url(#clipPath)">
          <g transform="translate(71.309 63.386)">
            <path d="M36,34.971a2.971,2.971,0,1,1,2.971,2.971A3.046,3.046,0,0,1,36,34.971Z" transform="translate(-36 -32)" fill="#262647" />
          </g>
        </g>
        <g clipPath="url(#clipPath)">
          <g transform="translate(61.405 77.251)">
            <path d="M34.962,39A1.981,1.981,0,1,1,31,39Z" transform="translate(-31 -39)" fill="#f7be8f" />
          </g>
        </g>
        <g clipPath="url(#clipPath)">
          <g transform="translate(55.542 82.283)">
            <path d="M35.884,47.4a9.245,9.245,0,0,1-7.725-4.358c-.2-.594-.2-1.188.4-1.387a1.044,1.044,0,0,1,1.387.4,6.735,6.735,0,0,0,11.885,0,1.02,1.02,0,0,1,1.783.99A9.245,9.245,0,0,1,35.884,47.4Z" transform="translate(-28.04 -41.54)" fill="#f4b28e" />
          </g>
        </g>
        <g clipPath="url(#clipPath)">
          <g transform="translate(35.654 23.763)">
            <path d="M73.462,39.735V53.6H69.5V42.9L58.8,34.584c-2.971,7.923-11.687,13.469-20.4,13.469-5.942,0-12.677-2.575-16.441-6.735V53.6H18V36.763a21.606,21.606,0,0,1,5.348-14.856c5.15-5.942,12.875-10.1,20.4-9.9,6.14.2,10.7,2.179,17.827,0a5.879,5.879,0,0,1,.594,4.358,25.737,25.737,0,0,1-.594,2.971h0C68.51,24.482,73.462,30.227,73.462,39.735Z" transform="translate(-18 -11.997)" fill="#262647" />
          </g>
        </g>
        <g clipPath="url(#clipPath)">
          <g transform="translate(33.674 61.405)">
            <path d="M22.942,42.885A5.836,5.836,0,0,1,17,36.942a5.4,5.4,0,0,1,1.783-4.16A6.176,6.176,0,0,1,22.942,31Z" transform="translate(-17 -31)" fill="#f7be8f" />
          </g>
        </g>
        <g clipPath="url(#clipPath)">
          <g transform="translate(87.155 61.405)">
            <path d="M44,42.885a5.836,5.836,0,0,0,5.942-5.942,5.4,5.4,0,0,0-1.783-4.16A5.4,5.4,0,0,0,44,31Z" transform="translate(-44 -31)" fill="#f7be8f" />
          </g>
        </g>
      </g>
    </motion.svg>
  )



}

export default Avatar