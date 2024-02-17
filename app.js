const express = require("express");
const bodyPareser = require("body-parser");
let ejs = require("ejs");

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyPareser.urlencoded({ extended: true }));

var posts = [];

const homeStringcontent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const aboutcontant =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet. Placerat vestibulum lectus mauris ultrices eros. Amet consectetur adipiscing elit pellentesque. Viverra nibh cras pulvinar mattis nunc sed. Turpis massa sed elementum tempus egestas sed sed risus pretium. Dui sapien eget mi proin sed libero enim. Consectetur libero id faucibus nisl tincidunt eget nullam. A scelerisque purus semper eget duis at tellus at urna. Diam ut venenatis tellus in metus.";

const contactus =
  "Vitae semper quis lectus nulla at volutpat diam ut. Ac tincidunt vitae semper quis lectus nulla at volutpat. Eget magna fermentum iaculis eu. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Vivamus at augue eget arcu dictum. Sed nisi lacus sed viverra tellus in hac habitasse platea. Ut tellus elementum sagittis vitae et leo.";

app.get("/", (req, res) => {
  res.render("home", { homeScreenContant: homeStringcontent, posts: posts });
});

app.get("/about", (req, res) => {
  res.render("about", { aboutcontant: aboutcontant });
});

app.get("/contact", (req, res) => {
  res.render("contact", { contactus: contactus });
});

app.get("/compose", (req, res) => {
  res.render("compose", { contactus: contactus });
});
app.get("/posts/:urlTitle", (req, res) => {

  
  
  posts.forEach((element) => {
    if (
      element.pTitle.toLocaleLowerCase().replaceAll(" ", "-") ===
      req.params.urlTitle.toLocaleLowerCase()
    ) {
      console.log("Match Found!");
      res.render("postes", {
        pTitle: element.pTitle,
        pText: element.pBodyText,
      });
    } else {
      res.redirect("/");
      console.log("Nothing is Found");
    }
  });
});

app.post("/compose", (req, res) => {
  let title = req.body.title;
  let bodyText = req.body.bodyText;
  let post = {
    pTitle: title,
    pBodyText: bodyText,
  };

  posts.push(post);

  res.redirect("/");
});
app.listen("3000", function () {
  console.log("This is Running on LochalHost:3000");
});
