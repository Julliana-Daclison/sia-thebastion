Shapes of returned database documents

`WRITER`
{
  firstName: string,
  lastName: string,
  searchId: string,
  image?: string,
  writings?: ARTICLE[]
}

`ARTICLE `
{
  searchId: string,
  title: string,
  content: string[],
  image: string,
  type: string,
  likes: number,
  author: WRITER,
  collaborators: WRITER[]
}

`GET` method:

`/api/articles`
  - Returns a list of articles. 
  - There are two 2 states of the api. The logged in and unlogged in version.
  - The unlogged in version will include a genre field in the json data, while the logged in version will not.
  - Returned json data of the api:
  {
    status: number,
    data: [
      {
        genre: string,
        readings: Article[]
      }
    ]
  }

  - Logged in version of the articles API
  {
    status: number,
    data: Article[]
  }


`/api/article/{searchId}`
  - Returns a single article document.
  - Replace the `searchId` parameter with the article's searchId.
  - Returned json data of the api:
  {
    status: number,
    data: Article
  }


`  /api/user/writer/{searchId}`
  - Returns a single writer document.
  - The parameter of `searchId` should be replaced by the writer's searchId:
  - Returned json data of the api:
  {
    status: number,
    data: WRITER
  }

  /


`POST` method

For now, leave the post method of the API.