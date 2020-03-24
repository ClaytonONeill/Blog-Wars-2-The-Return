const app = angular.module('blogs', [])


app.controller('BlogsController', ['$http', function ($http) {
    // Start Controller ------------------------------
    this.title = "";
    this.description = "";
    this.createBlog = {};
    this.blogs = [];

    const controller = this;

    // =========== ROUTES =================//

    // POST NEW BLOG
    this.createBlog = () => {
        $http({
            method: 'POST',
            data: this.createBlog,
            url:'/blogs'
        }).then(
            (response)=>{
                console.log(response.data);
                this.blogs.push(response.data);
                this.createBlog.title='';
            }
        )
    }

    // GET REQUEST TO POPULATE BLOGS
    this.getBlog = ()=>{
        $http({
            method:'GET',
            url:'/blogs'
        }).then(
            (response)=>{
                this.blogs=response.data
            }
        )
    }
    this.getBlog();

    // DELETE BLOG ---- *** SUPER IMPORTANT ***
    this.deleteBlog = (id)=>{
        $http({
            method:'DELETE',
            url:'/blogs'+id
        }).then(
            (response)=>{
                const removeByIndex = this.blogs.findIndex(blogs=> blogs._id ===id);
                this.blogs.splice(removeByIndex,1);
            }
        )
    }

    // EDIT BLOGS
    this.updateBlog=(blog)=>{
        blog = req.body;

        $http({
            method:'PUT',
            url:'/blogs'+id,
            data:{
                title:blog.title
            }
        }).then(
            (response)=>{
                console.log(response.data)
            }
        )
    }



    // End -------------------------------------------
}])