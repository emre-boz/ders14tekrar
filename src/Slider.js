import { useEffect, useState, useRef } from "react";
import "./slider.css";
import leftButton from "./assets/chevron-left-solid.svg"
import rightButton from "./assets/chevron-right-solid.svg"

function Slider() {
    console.log("Slider render oldu");
    // const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const sliderWindowRef = useRef(null);
    
  
    const [draggable,setDraggable]=useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });
    const [currentIndex,setCurrentIndex]=useState(1)
    const [sliderFirstTouch,setsliderFirstTouch]=useState(0);
    const [sliderWalk,setsliderWalk]=useState(0);
    const [sliderEndPosition,setsliderEndPosition]=useState(0);
    const [whileMoving,setwhileMoving]=useState(false);
    const [isActive, setIsActive] = useState(false);
  
  
      // Mevcut className prop'u
      const existingClassName = 'slider';
  
      // Dinamik olarak eklenen class'ı oluşturun
      const dynamicClassName = isActive ? 'is-active' : '';
    
      // Mevcut className ve dinamik className'ı birleştirin
      const combinedClassName = `${existingClassName} ${dynamicClassName}`;
  
  
    function sliderResizer() {
      const sliderWindow = sliderWindowRef.current;
      let sliderNewWidth = Math.floor((window.innerWidth / 100) * 80);
      sliderWindow.style.width = sliderNewWidth + "px";
      sliderWindow.style.height = (sliderNewWidth / 16) * 9 + "px";
    }
  
  
    const handleResize = () => {
      console.log("Pencere boyutu değişti!");
      sliderResizer();
    };
  
  
    function showSlide(index) {
      console.log("showslide çalıştı");
      const sliderWindow = sliderWindowRef.current;
      const slideWidth = sliderWindow.offsetWidth;
  
      // slider.classList.remove("is-active");
      // setIsActive(false);
      // slider.style.transform = `translate3d(${-index * slideWidth}px,0,0)`;
      setPosition({ x: -index * slideWidth, y: 0, z: 0 });
  
      // sliderEndPosition = -index * slideWidth;
      setsliderEndPosition(-index * slideWidth)
  
      // currentIndex = index;
      setCurrentIndex(index);
  
      // indexViewer.textContent = currentIndex;
    }
    
    function prevSlide() {
  
      // slider.classList.add("is-active");
  
      showSlide(currentIndex - 1);
    }
  
    function nextSlide() {
  
      setIsActive(true);
      showSlide(currentIndex + 1);
    }
  
  
  
    function addPrefixToKey(originalKey, index) {
      // "01", "02", "03" gibi bir önek ekleyerek yeni bir key oluşturun
      const prefix = (index + 1).toString().padStart(2, '0');
      return `${prefix}_${originalKey}`;
    }
  
    const fetchMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=6b62b2768b9e26c49fd92dabbb851571"
      );
      const responseJson = await response.json();
  
      let resultJson = responseJson.results;
      // console.log("resultJson", resultJson);
      let newResult = [...resultJson];
      newResult.push(newResult[0]);
      newResult.unshift(newResult[newResult.length - 2]);
  
      const modifiedData = newResult.map((item, index) => ({
        ...item,
        id: addPrefixToKey(item.id, index)
      }));
  
  
  
  
      setMovies(modifiedData);
  
    };
  
    // useEffect(() => {
    //   fetchMovies();
    // }, []);
  
    useEffect(() => {
      // Component monte edildiğinde
      fetchMovies()    
      sliderResizer()
      showSlide(21)
    
      window.addEventListener("resize", handleResize);
      
      // Component unmount olduğunda
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []); // useEffect sadece bir kere çalışacak şekilde yapılandırıldı
  
  
  
    return (
      <>
        <h1>Slider</h1>
        <div className="slider-container">
        <button id="left" className="arrowButtons"  >
          <img src={leftButton} alt="left"/>
        </button>
        <button id="right" className="arrowButtons" onClick={(e)=>{
              const sliderWindow = sliderWindowRef.current;
              const slideWidth = sliderWindow.offsetWidth;
              // slider.classList.add("is-active");
              console.log("nextSlide---currentIndex",currentIndex)
              console.log(movies.length);
              if (currentIndex == movies.length - 1) {
                console.log("yakalandı");
                
                setIsActive(false);
               
                setPosition({ x: -slideWidth, y: 0, z: 0 });
                
                setsliderEndPosition(-slideWidth);
                
                setCurrentIndex(1);
  
                // showSlide(1)
                console.log("koşulsonu currentIndex---",currentIndex);
                
              }
              console.log("koşulDışı currentIndex---",currentIndex);
              // nextSlide();
              console.log("nextSlideSonrasi currentIndex---",currentIndex);
        }}>
          <img src={rightButton} alt="right" />
        </button>
          <div className="slider-window" ref={sliderWindowRef}>
            <div 
            className={combinedClassName}
            style={{
              transform: `translate3d(${position.x}px, ${position.y}px, ${position.z}px)`
            }}
            >
              {movies &&
                movies.map((movie) => {
                  // return <img src={movie.backdrop_path} alt={backdrop_path} />
                  // return <div>{movie.backdrop_path}</div>
                  return (
                    <div key={movie.id} className="item">
                    
                      <img
                        src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                        alt={movie.original_title}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
  
        {/* <button id="left" className="arrowButtons">LEFT</button>
        <button id="right" className="arrowButtons">RIGHT</button> */}
      </>
    );
  }
  export default Slider;
  
