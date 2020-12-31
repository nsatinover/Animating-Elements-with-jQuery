$('#flashMessage').hide();

$('#previewButton').on('click', function(){
    const title = $('#blogTitleInput').val();
    const content = $('#blogContentInput').val();

    let blogTitlePreview = $('#blogTitlePreview');
    let blogContentPreview = $('#blogContentPreview');

    blogTitlePreview.text(title);
    blogContentPreview.text(content);

    $('#flashMessage').hide()
    .slideDown(1000)
    .delay(3000)
    .slideUp();
});

