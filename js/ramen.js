$('.imagez img').click(function (e) { 
    e.preventDefault();
    let carousel = document.querySelector('.carousel img').src
    $('.carousel img').attr("src", this.src);
    $(this).attr("src", carousel);
});
