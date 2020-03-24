const app = angular.module('blogs', [])


app.controller('BlogsController', ['$http', function ($http) {
    // Start Controller ------------------------------
    this.title = "";
    this.description = "";
    this.postBlog = {};
    this.blogs = [];

    this.editIndex;

    const controller = this;

    // =========== ROUTES =================//

    // POST NEW BLOG
    this.createBlog = () => {
        $http({
            method: 'POST',
            data: this.postBlog,
            url:'/blogs'
        }).then(
            (response)=>{
                console.log(response.data);
                this.blogs.push(response.data);
                this.postBlog.title='';
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
            url:'/blogs/'+id
        }).then(
            (response)=>{
                const removeByIndex = this.blogs.findIndex(blogs=> blogs._id ===id);
                this.blogs.splice(removeByIndex,1);
            }
        )
    }

    // EDIT BLOGS
    this.updateBlog = (blog)=>{
        console.log(blog);
        console.log(this.updatedTitle);
          $http({
          method:'PUT',
          url:'/blogs/'+ blog._id,
          data:{
              title: this.updatedTitle
              description: this.updatedDescription
          }
          }).then(
              (response)=>{
                  console.log(response.data)
              }
          )
    }



    // End -------------------------------------------
}])
