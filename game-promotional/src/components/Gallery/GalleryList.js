import Gallery from './GalleryMain';
import './Gallery.css';

function GalleryList(props) {
  return (
    <section className='section1'>
      <ul className='list'>
        {props.items.map((item) => <Gallery key={item.id} text={item.text} title={item.title} image={item.url}/>)}
      </ul>
      </section>
  );
}
export default GalleryList;



