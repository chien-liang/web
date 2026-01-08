var posts=["2026/01/08/Hello-World-0/","2025/11/20/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };