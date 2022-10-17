import {LocomotiveScrollOptions} from 'react-locomotive-scroll'

const scroll:LocomotiveScrollOptions={
    smooth:true,
     multiplier:.6,
    inertial: 0.8,
    mobile: {
      breakpoint: 0,
    smooth:true,
    inertial: 0.4,
    },
    smartphone:{
      breakpoint: 0,
      smooth:true,
      inertial: 0.4,
    },
    tablet: {
      breakpoint: 0,
    smooth:true,
    inertial: 0.5,
    },
  }

  export default scroll