export default function ImageModal() {
  return (
    <div className="modal">
      <div className="closeModal">
        <i className="fa fa-window-close x-icon"></i>
      </div>
      <div className="modalInner">
        <button aria-label="Previous Photo" className="prev">
          <i className="lni lni-chevron-left"></i>
        </button>
        <figure>
          <img src="./images/kith-hoodie.jpg" />
        </figure>
        <button className="next" aria-label="Next Photo">
          <i className="lni lni-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}
