const GalleryCard = () => {
    return (
        <div class="card card-image"
        style={{backgroundImage: `url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.webp)`, width: '300px'}}>
      
        <div class="text-grey text-center d-flex align-items-center rgba-black-strong py-5 px-4">
          <div>
            <h5 class="pink-text"><i class="fas fa-chart-pie"></i> Marketing</h5>
            <h3 class="card-title pt-2"><strong>This is the card title</strong></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
              optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
              Odit sed qui, dolorum!.</p>
            <a class="btn btn-pink"><i class="fas fa-clone left"></i> View project</a>
          </div>
        </div>
      
      </div>
    )
} 

export default GalleryCard;