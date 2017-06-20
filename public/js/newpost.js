$(document).ready(function() {

    function getPosts(category) {
        // var categoryString = category || "";
        // if (categoryString) {
        //   categoryString = "/category/" + categoryString;
        // }
        $.get("/api/posts/" + category, function(data) {
            console.log("Posts", data);
            posts = data;
            if (!posts || !posts.length) {
                displayEmpty();
            } else {
                initializeRows();
            }
        });
    }

    $(document).on('click', 'add-new-thread', addNewPost);

    function addNewPost() {
        var postInput = $('#new-post').val().trim();
        var newPost = {
            post: postInput,
            topic: topic,
            author: author
        };
        $.post("/api/post", newPost, function() {});
    }
});
