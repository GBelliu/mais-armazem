import * as prismic from "@prismicio/client";

// Fill in your repository name
export const repositoryName = "mais-armazem";

export const client = prismic.createClient(repositoryName, {
  // If your repository is private, add an access token
  accessToken:
    "MC5aYkprTUJBQUFDRUFObFlT.77-9Qu-_ve-_ve-_ve-_ve-_vTYHIg3vv71l77-977-9BO-_vSd877-9ZO-_ve-_ve-_ve-_ve-_ve-_vRk9NO-_ve-_vQ",

  // This defines how you will structure URL paths in your project.
  // Update the types to match the custom types in your project, and edit
  // the paths to match the routing in your project.
  //
  // If you are not using a router in your project, you can change this
  // to an empty array or remove the option entirely.
  routes: [
    {
      type: "noticia",
      path: "/midia",
    },
  ],
});
