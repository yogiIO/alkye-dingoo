import Slider from "react-slick";
import imgSrc from '../../assets/Images/img.avif'

function Slides({slideItem}) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    appendDots: ((dots) => {
      const updatedDots = dots.map((dotsItem) => {
        return (
          <li key={dotsItem.key} {...dotsItem.props} {...dotsItem.props.children.props}> <div/> </li>
        )
      })
      return (<div>
        <ul style={{ margin: "0px"}} className=" flex justify-end gap-[6px] sm:gap-[12px]"> {updatedDots} </ul>
      </div>)
    }),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="bg-white text-black">
      <Slider {...settings} className=" bg-black">
        {
          slideItem.map((item) => {
            return <img src={item.image_url} key={item.id} alt="photo" className=" min-h-[350px] rounded-[20px] sm:rounded-[40px] object-cover" />
          })
        }
      </Slider>
    </div>
  );
}

export default Slides;
