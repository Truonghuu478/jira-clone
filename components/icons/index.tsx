import { ReactNode } from "react"

interface PropsIcon {
  className?:string
}
interface IIcon extends PropsIcon{
  svg :ReactNode,
}


 const Icon = ({svg,className}:IIcon)=> {
  return (
    <div className={className}>
      {svg}
    </div>
  )
}

const logo =  <svg viewBox="0 0 190 32"  xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">
<defs>
  <linearGradient x1="99.684716%" y1="15.8138128%" x2="39.8444399%" y2="97.4388388%" id="uid1">
    <stop stop-color="#0052CC" offset="0%"></stop>
    <stop stop-color="#2684FF" offset="100%"></stop>
  </linearGradient>
</defs>
<g stroke="none" stroke-width="1" fill="#0052CC">
  <path fill="url(#uid1)" d="M6.90502605,15.6123193 C6.76436383,15.4302139 6.53773035,15.3340846 6.30742588,15.35884 C6.0771214,15.3835955 5.876643,15.525635 5.7787929,15.7333781 L0.0719979599,27.0218487 C-0.0337056449,27.2310259 -0.0224063827,27.4794358 0.101860917,27.6783741 C0.226128216,27.8773125 0.445645594,27.9984148 0.68202605,27.9984369 L8.62844459,27.9984369 C8.88847261,28.0044096 9.12761649,27.8581627 9.23847268,27.6253781 C10.9526159,24.1210252 9.91378448,18.7926722 6.90502605,15.6123193 Z"></path>
  <path fill="#2684FF" d="M11.0859556,5.33713587 C8.19309829,9.74089822 7.85921851,15.3267488 10.2073011,20.0371359 L14.0383488,27.6176065 C14.1538739,27.8462194 14.3900332,27.9906411 14.6483769,27.9906653 L22.5933685,27.9906653 C22.829749,27.9906431 23.0492663,27.8695408 23.1735336,27.6706025 C23.2978009,27.4716641 23.3091002,27.2232543 23.2033966,27.014077 C23.2033966,27.014077 12.5147056,5.8619594 12.2460792,5.33290058 C12.1377032,5.11315026 11.9118188,4.97410225 11.6646746,4.97500451 C11.4175304,4.97590676 11.1926893,5.11660025 11.0859556,5.33713587 L11.0859556,5.33713587 Z"></path>
  <path d="M104.2774,14.3919316 C104.2774,17.1872257 105.588069,19.4065198 110.714802,20.3862846 C113.773504,21.0215787 114.414212,21.5100493 114.414212,22.5187551 C114.414212,23.4985198 113.772077,24.1327551 111.617715,24.1327551 C109.013896,24.0864379 106.462135,23.403307 104.189999,22.1442846 L104.189999,26.6972257 C105.733976,27.4465198 107.772754,28.2822846 111.559566,28.2822846 C116.919251,28.2822846 119.045788,25.9175787 119.045788,22.4033434 M119.045788,22.4033434 C119.045788,19.0892257 117.268858,17.5327551 112.25878,16.4668728 C109.491535,15.8615787 108.821574,15.2566375 108.821574,14.3919316 C108.821574,13.297814 109.811889,12.835814 111.646968,12.835814 C113.860906,12.835814 116.045591,13.4986375 118.113622,14.4208728 L118.113622,10.0691081 C116.130615,9.17615406 113.970906,8.73311319 111.792518,8.7724022 C106.840589,8.7724022 104.2774,10.9048728 104.2774,14.3919316" fill="inherit"></path>
  <polygon fill="inherit" points="173.129997 9.07000017 173.129997 28.0038825 177.20791 28.0038825 177.20791 13.5657649 178.926691 17.3983531 184.694132 28.0038825 189.820865 28.0038825 189.820865 9.07000017 185.742952 9.07000017 185.742952 21.2891766 184.198975 17.7442355 179.567399 9.07000017"></polygon>
  <rect fill="inherit" x="142.740005" y="9.07000017" width="4.45677247" height="18.9338824"></rect>
  <path d="M137.600792,22.4033434 C137.600792,19.0892257 135.823862,17.5327551 130.813784,16.4668728 C128.046539,15.8615787 127.376579,15.2566375 127.376579,14.3919316 C127.376579,13.297814 128.366893,12.835814 130.201972,12.835814 C132.41591,12.835814 134.600595,13.4986375 136.668626,14.4208728 L136.668626,10.0691081 C134.685619,9.17615406 132.52591,8.73311319 130.347522,8.7724022 C125.395593,8.7724022 122.832404,10.9048728 122.832404,14.3919316 C122.832404,17.1872257 124.143073,19.4065198 129.269806,20.3862846 C132.328508,21.0215787 132.969216,21.5100493 132.969216,22.5187551 C132.969216,23.4985198 132.327081,24.1327551 130.172719,24.1327551 C127.568901,24.0864379 125.017139,23.403307 122.745003,22.1442846 L122.745003,26.6972257 C124.28898,27.4465198 126.327758,28.2822846 130.11457,28.2822846 C135.474256,28.2822846 137.600792,25.9175787 137.600792,22.4033434" fill="inherit"></path>
  <polygon fill="inherit" points="69.6599979 9.07000017 69.6599979 28.0038825 78.8204081 28.0038825 80.2627142 23.9115296 74.1456665 23.9115296 74.1456665 9.07000017"></polygon>
  <polygon fill="inherit" points="51.5549984 9.07000017 51.5549984 13.1620002 56.5069282 13.1620002 56.5069282 28.0038825 60.9925967 28.0038825 60.9925967 13.1620002 66.2941332 13.1620002 66.2941332 9.07000017"></polygon>
  <path d="M45.0573091,9.07000017 L39.1785647,9.07000017 L32.5050001,28.0038825 L37.6014102,28.0038825 L38.5474889,24.815059 C40.877531,25.4919503 43.3551322,25.4919503 45.6851743,24.815059 L46.6312529,28.0038825 L51.7287333,28.0038825 L45.0573091,9.07000017 Z M42.1177585,21.4007061 C41.287584,21.4006584 40.4616854,21.2831148 39.6651602,21.0516472 L42.1177585,12.7889413 L44.5703569,21.0544708 C43.7736914,21.2849831 42.9477956,21.4015755 42.1177585,21.4007061 L42.1177585,21.4007061 Z" fill="inherit"></path>
  <path d="M94.6019534,9.07000017 L88.7235658,9.07000017 L82.0500011,28.0038825 L87.1474815,28.0038825 L88.0935601,24.815059 C90.4236023,25.4919503 92.9012034,25.4919503 95.2312455,24.815059 L96.1773242,28.0038825 L101.274805,28.0038825 L94.6019534,9.07000017 Z M91.6627596,21.4007061 C90.8325851,21.4006584 90.0066865,21.2831148 89.2101613,21.0516472 L91.6627596,12.7889413 L94.1153579,21.0544708 C93.3186924,21.2849831 92.4927966,21.4015755 91.6627596,21.4007061 L91.6627596,21.4007061 Z" fill="inherit"></path>
  <path d="M163.256954,9.07000017 L157.378566,9.07000017 L150.705002,28.0038825 L155.802482,28.0038825 L156.748561,24.815059 C159.078603,25.4919503 161.556204,25.4919503 163.886246,24.815059 L164.832325,28.0038825 L169.930162,28.0038825 L163.256954,9.07000017 Z M160.315977,21.4007061 C159.485802,21.4006584 158.659903,21.2831148 157.863378,21.0516472 L160.315977,12.7889413 L162.768575,21.0544708 C161.971909,21.2849831 161.146014,21.4015755 160.315977,21.4007061 L160.315977,21.4007061 Z" fill="inherit"></path>
</g>
</svg>

const facebook = <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
<path fill="#3F51B5" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"></path>
</svg>

const edit = <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" ><path d="M 43.125 2 C 41.878906 2 40.636719 2.488281 39.6875 3.4375 L 38.875 4.25 L 45.75 11.125 C 45.746094 11.128906 46.5625 10.3125 46.5625 10.3125 C 48.464844 8.410156 48.460938 5.335938 46.5625 3.4375 C 45.609375 2.488281 44.371094 2 43.125 2 Z M 37.34375 6.03125 C 37.117188 6.0625 36.90625 6.175781 36.75 6.34375 L 4.3125 38.8125 C 4.183594 38.929688 4.085938 39.082031 4.03125 39.25 L 2.03125 46.75 C 1.941406 47.09375 2.042969 47.457031 2.292969 47.707031 C 2.542969 47.957031 2.90625 48.058594 3.25 47.96875 L 10.75 45.96875 C 10.917969 45.914063 11.070313 45.816406 11.1875 45.6875 L 43.65625 13.25 C 44.054688 12.863281 44.058594 12.226563 43.671875 11.828125 C 43.285156 11.429688 42.648438 11.425781 42.25 11.8125 L 9.96875 44.09375 L 5.90625 40.03125 L 38.1875 7.75 C 38.488281 7.460938 38.578125 7.011719 38.410156 6.628906 C 38.242188 6.246094 37.855469 6.007813 37.4375 6.03125 C 37.40625 6.03125 37.375 6.03125 37.34375 6.03125 Z"/></svg>

const del =  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30">    <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"/></svg>
const jira = <svg viewBox="0 0 69 32" height="32" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">
<defs>
  <linearGradient x1="98.0308675%" y1="0.160599572%" x2="58.8877062%" y2="40.7655246%" id="uid158">
    <stop stop-color="#0052CC" offset="18%"></stop>
    <stop stop-color="#2684FF" offset="100%"></stop>
  </linearGradient>
</defs>
<g stroke="none" stroke-width="1" fill-rule="nonzero">
  <path fill="#2684FF" d="M22.9366667,4 L11.41,4 C11.41,5.3800098 11.9582068,6.703498 12.934021,7.67931228 C13.9098353,8.65512657 15.2333235,9.20333333 16.6133333,9.20333333 L18.7366667,9.20333333 L18.7366667,11.2533333 C18.7385054,14.1244521 21.0655479,16.4514946 23.9366667,16.4533333 L23.9366667,5 C23.9366667,4.44771525 23.4889514,4 22.9366667,4 Z"></path>
  <path fill="url(#uid158)" d="M17.2333333,9.74333333 L5.70666667,9.74333333 C5.70850536,12.6144521 8.03554792,14.9414946 10.9066667,14.9433333 L13.03,14.9433333 L13.03,17 C13.0336786,19.8711178 15.3622132,22.196669 18.2333333,22.1966667 L18.2333333,10.7433333 C18.2333333,10.1910486 17.7856181,9.74333333 17.2333333,9.74333333 Z"></path>
  <path fill="url(#uid158)" d="M11.5266667,15.4833333 L0,15.4833333 C3.51929402e-16,18.357055 2.32961169,20.6866667 5.20333333,20.6866667 L7.33333333,20.6866667 L7.33333333,22.7366667 C7.33516565,25.6051863 9.65815176,27.9311544 12.5266667,27.9366667 L12.5266667,16.4833333 C12.5266667,15.9310486 12.0789514,15.4833333 11.5266667,15.4833333 Z"></path>
  <path fill="var(--ds-text, #253858)" d="M37.07,18.956 C37.07,20.646 36.394,21.842 34.418,21.842 C33.56,21.842 32.702,21.686 32,21.4 L32,23.662 C32.65,23.896 33.586,24.104 34.808,24.104 C38.032,24.104 39.41,21.946 39.41,18.8 L39.41,6.918 L37.07,6.918 L37.07,18.956 Z M42.894,7.568 C42.894,8.556 43.544,9.128 44.454,9.128 C45.364,9.128 46.014,8.556 46.014,7.568 C46.014,6.58 45.364,6.008 44.454,6.008 C43.544,6.008 42.894,6.58 42.894,7.568 Z M43.31,24 L45.546,24 L45.546,11 L43.31,11 L43.31,24 Z M48.926,24 L51.11,24 L51.11,16.33 C51.11,13.574 52.852,12.716 55.712,13.002 L55.712,10.818 C53.164,10.662 51.864,11.754 51.11,13.288 L51.11,11 L48.926,11 L48.926,24 Z M66.45,24 L66.45,21.66 C65.618,23.376 64.058,24.26 62.056,24.26 C58.598,24.26 56.856,21.322 56.856,17.5 C56.856,13.834 58.676,10.74 62.316,10.74 C64.214,10.74 65.67,11.598 66.45,13.288 L66.45,11 L68.686,11 L68.686,24 L66.45,24 Z M59.092,17.5 C59.092,20.62 60.34,22.18 62.654,22.18 C64.656,22.18 66.45,20.906 66.45,18.02 L66.45,16.98 C66.45,14.094 64.812,12.82 62.914,12.82 C60.392,12.82 59.092,14.484 59.092,17.5 Z" fill-rule="evenodd"></path>
</g>
</svg>

export const LogoIcon = (props:PropsIcon)=>{
  return (
    <Icon svg={jira} {...props}/>
  )
}

export const FacebookLogo = (props:PropsIcon)=>{
  return (
    <Icon svg={facebook} {...props}/>
  )
}

export const EditIcon = (props:PropsIcon)=>{
  return (
    <Icon svg={edit} {...props}/>
  )
}
export const DelIcon = (props:PropsIcon)=>{
  return (
    <Icon svg={del} {...props}/>
  )
}



