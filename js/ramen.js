$('.imagez img').click(function (e) { 
    e.preventDefault();
    let carousel = document.querySelector('.carouseler img').src
    $('.carouseler img').attr("src", this.src);
    $(this).attr("src", carousel);
});
