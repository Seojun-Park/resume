export const WORKS_ITEMS = [
  {
    preview:
      "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/up.gif?alt=media&token=6e6b56c0-9097-46fb-b720-96b57ae93ec4",
    title: "Uber Clone",
    thumbnail: "tbu",
    label: "Dec, 2020",
    images: {
      login:
        "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/uberclone%2Flogin.gif?alt=media&token=6c9197bf-8535-42db-b9e6-b73926a4bb4e",
      addPlace:
        "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/uberclone%2Faddplace.gif?alt=media&token=39bdde20-7f1b-4787-a2f4-16e0e2bfd84f",
      editUser:
        "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/uberclone%2FeditUser.gif?alt=media&token=5095dc2b-a584-4c1d-88db-4caa3bcf33c0",
      request:
        "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/uberclone%2FrequestRideandChat.gif?alt=media&token=557498c7-77f0-4de8-a0ad-7728957a0a4f",
      end:
        "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/uberclone%2Fend.gif?alt=media&token=5886fd9b-17a3-4dd1-8de4-7e718aad950d",
      main:
        "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/uberclone%2Fmainpage.png?alt=media&token=8418ff72-9011-4928-bb04-45964f3d5003",
      move1:
        "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/uberclone%2Fmove1.png?alt=media&token=1cb28144-6dab-4507-93c4-7060eff6d344",
      move2:
        "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/uberclone%2Fmove2.png?alt=media&token=ec882652-b4a6-465f-a98c-4ebca6a435e2",
      find:
        "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/uberclone%2FfindAddress.png?alt=media&token=401e3383-d821-4e1f-9c01-87b0d172a669",
      api:
        "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/uberclone%2Fapi.png?alt=media&token=042ca355-2ae9-49a6-8237-ed3c8394968f",
      api1:
        "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/uberclone%2Fapi1.png?alt=media&token=8c4ef9a1-c635-4e4e-acbb-1941a96a3b34",
      api2:
        "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/uberclone%2Fapi2.png?alt=media&token=779a778f-a7ed-4ee5-beed-7daf54847920",
      api3:
        "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/uberclone%2Fapi3.png?alt=media&token=717a4292-f4d4-4392-b7da-e4aeaf53b357",
    },
    description: `Uber Clone is uber-like web app. After user logs in user can choose whether driver or customer. The app tracks user and driver's current position and show them on the map by using graphql subscription. 
    User can search the location where they want by location name or coordinates. Once, the app received location term from the user, the app request location information to Google geocoding API and convert it into readable data.
    When user request a ride, the nearest driver from the user will get notification popup, and the driver can choose whether accept the requested ride or not. All riding information such as duration, price, distance ...etc is from Google map API.
    The chat between driver and customer is only available when driver accept the requested ride. It is terminated automatically when the ride is finished.
    `,
    repository: "https://github.com/Seojun-Park/uberClone",
  },
  {
    preview:
      "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/preview.gif?alt=media&token=c71434db-050e-4e55-aa55-89d6c464533f",
    title: "Jinstagram",
    thumbnail: "tbu",
    label: "Jan, 2021",
    images: {
      auth:
        "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/Jinstagram%2Fauth.gif?alt=media&token=ebf3b2bb-3b81-41fb-972f-80e2942f4ad8",
      upload:
        "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/Jinstagram%2Fupload.gif?alt=media&token=01eedb71-0852-4a28-a347-eae1193aa122",
      edit:
        "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/Jinstagram%2Fedit.gif?alt=media&token=f47d5b7a-5ec9-4759-ae02-25ff71b523ff",
      chat:
        "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/Jinstagram%2Fchat.gif?alt=media&token=28f64d7b-72f0-4d20-8464-5452b43e7d17",
      sendchat:
        "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/Jinstagram%2FsendChat.gif?alt=media&token=0749c1f6-02f7-4e5e-abbd-e57fa10b80c5",
    },
    description: `Jinstagram is instagram-like web app. It contains User posting and realtime chat. User can post image with caption and user's current position(if user allows)
      User can log in with their social media or sigin in with their verified email. 
      Once, user logs in, the app request permission of getting user's current position. If user allows, the app tracks user's position, and everytime user uploads post, the post uploads with user's current position.
      The user location data is transformed by Google geocoding API(coordinate -> address).
      User is able to send message to other user and edit own information such as name, profile photo...etc
      `,
    repository: "https://github.com/Seojun-Park/Jinstagram-client",
  },
  {
    preview:
      "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/camagru%2Fcamapreview.gif?alt=media&token=8e705ea5-0563-4bcf-8f91-3865894b1814",
    title: "Camagru",
    thumbnail: "tbu",
    label: "Oct, 2020",
    images: {
      login:
        "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/camagru%2Flogin.png?alt=media&token=126fe877-a072-4fbf-8e08-47ab25c9a0bd",
      signup:
        "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/camagru%2Fsignup.png?alt=media&token=9147c513-eb5f-4005-866f-c7d64ebadfc6",
      main:
        "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/camagru%2Fmain.png?alt=media&token=c82b3188-eeee-4f14-9ab8-80183c0c6d74",
      upload:
        "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/camagru%2Fupload.png?alt=media&token=865580fa-522b-4a8b-ae54-b9c8cbf2e2af",
      camera:
        "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/camagru%2Fcamera.png?alt=media&token=9b8854c7-9395-49ff-b298-ea336275ae8a",
      gallery:
        "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/camagru%2Fgallery.png?alt=media&token=53d793fe-b50b-459e-a5b1-456b2e5743c6",
      comment:
        "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/camagru%2Fcomment.png?alt=media&token=45dc7fea-ed95-4137-a8f3-b268a4fbe6ea",
      profile:
        "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/camagru%2Fprofile.png?alt=media&token=aa20f788-ceb3-4a7a-bdd4-814c998ac733",
      modify:
        "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/camagru%2Fmodify.png?alt=media&token=be4f18de-8a67-4034-b85d-4e214fd2041b",
    },
    description: `This is the first project creating own social network, with php and vanilla JavaScript.
      A web application allowing registered users to make basic photo editing using their
      webcam and some predefined images.
      All captured images are likeable and commentable via a gallery page.
      This project has been developed with HTML/CSS, PHP and Javascript without any framwork or external library.
      `,
    repository: "https://github.com/Seojun-Park/42_camagru",
  },
  {
    preview:
      "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/fillit%2FfillitPreview.png?alt=media&token=2c936271-b37c-4313-8566-158e47dd6d8e",
    title: "Fillit",
    thumbnail: "tbu",
    label: "Mar, 2019",
    images: {
      result:
        "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/fillit%2Fresult.png?alt=media&token=e63d2ed2-f781-4fcc-af79-e81f087ef6a4",
      pieces:
        "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/fillit%2Fpieces.png?alt=media&token=83b12acf-d010-477b-a4d1-f01e17dec9e9",
      possiblePiece:
        "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/fillit%2FpossiblePiece.png?alt=media&token=3afd0a33-7cc7-44bd-a36e-bb71a8e2b101",
      map:
        "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/fillit%2Fmap.png?alt=media&token=c5e7994f-0662-4d5f-a609-dc11c054a085",
      tetStructure:
        "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/fillit%2Ftet.png?alt=media&token=dc3cb1f7-68d4-4242-9e6c-ef585a8af04c",
      example1:
        "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/fillit%2Fexample1.png?alt=media&token=0acd8297-491f-40d5-8206-0ddf54a38bb5",
      example2:
        "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/fillit%2Fexample2.png?alt=media&token=5d8251e9-f9a0-4f54-8343-bc81296521a4",
      example3:
        "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/fillit%2Fexample3.png?alt=media&token=1bc4d182-89e3-4af6-9ece-a79c5407624b",
      example4:
        "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/fillit%2Fexample4.png?alt=media&token=3f2a08d6-cc76-4747-829e-90e03cb7fdf1",
      example5:
        "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/fillit%2Fexample5.png?alt=media&token=8fa3b054-2c01-4ae8-9907-37303bdf3cfd",
    },
    description: `Algorithm Practice - Fit tetris pieces into the smallest square possible.
      The goal of this project is to fill in a map of empty spaces with given classic tetriminos.
      `,
    repository: "https://github.com/Seojun-Park/42_projects/tree/main/fillIt",
  },
  {
    preview:
      "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/nqueens%2FnqueenPre.png?alt=media&token=6cc1b19b-218c-465c-9dcc-317dc1b448c0",
    title: "N-Queen",
    thumbnail: "tbu",
    label: "Oct, 2020",
    images: {
      nqueen:
        "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/nqueens%2Fngueens.jpg?alt=media&token=e7190d62-85d9-4401-b528-380724ef6ac8",
      result:
        "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/nqueens%2FnqueenResult.jpg?alt=media&token=bb69f110-f2d1-4045-a82b-a41a5babb9e4",
      step1: {
        0: "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/nqueens%2Fstep1-1.jpg?alt=media&token=3e917c13-6a60-4c2b-bd10-496eb4e4659e",
        1: "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/nqueens%2Fstep1-2.jpg?alt=media&token=586cb1fe-9989-4086-be8e-102fd0a84a52",
      },
      step2: {
        0: "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/nqueens%2Fstep2-1.jpg?alt=media&token=9f466ee6-e687-4721-b91c-c5a3bfeb074d",
        1: "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/nqueens%2Fstep2-2.jpg?alt=media&token=fba4f28f-5fad-4d1c-b1ed-78a7761f5745",
      },
      backtracking: {
        firstQueen:
          "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/nqueens%2Ffirst-queen-position.jpg?alt=media&token=0be28c14-b205-4e76-a287-96b15e009251",
        wrong1:
          "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/nqueens%2Fwrong-position.jpg?alt=media&token=d26f4403-9b07-4d0e-99a2-fdd326637abf",
        wrong2:
          "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/nqueens%2Fwrong-position2.jpg?alt=media&token=6f175cbe-b2ca-49bc-97a4-96805d54e248",
        secondQueen:
          "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/nqueens%2Fsecond-queen-position.jpg?alt=media&token=11a98008-e91b-4a99-88c8-e98da56b578d",
      },
      code:
        "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/nqueens%2Fnqeencode.png?alt=media&token=68a45bc8-e7fe-4997-a7f7-1d8fd50eb02f",
    },
    description: `N-Queens puzzle is well-known puzzle as an example of back tracking algorithm.
      The eight queens puzzle is the problem of placing eight chess queens on an 8×8 chessboard,
      so that no two queens threaten each other;
      thus, a solution requires that no two queens share the same row, column, or diagonal.
      `,
    repository: "https://github.com/Seojun-Park/N_queens_game",
  },
  {
    preview:
      "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/ssl%2Fssl.png?alt=media&token=da6a49ff-969b-4b97-b7a9-c0531e8d5ffc",
    title: "ft_SSL",
    thumbnail: "tbu",
    label: "Oct, 2020",
    images: {
      page: "",
    },
    description:
      "SSL (Secure Sockets Layer) and its successor, TLS (Transport Layer Security), are protocols for establishing authenticated and encrypted links between networked computers.",
  },
  {
    preview:
      "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/libft%2Flibft.png?alt=media&token=785f61ad-9a08-422d-bcc8-e9a5c2d58418",
    title: "libft",
    thumbnail: "tbu",
    label: "Oct, 2020",
    images: {
      page: "",
    },
    description: "A program that imitates commands from OpenSSL",
    repository: "https://github.com/Seojun-Park/42_projects/tree/main/ft_ssl",
  },
  {
    preview:
      "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/filler%2Ffiller.gif?alt=media&token=257664bd-4ff3-4d99-beb6-6c2d370bdb2e",
    title: "filler",
    thumbnail: "tbu",
    label: "1010",
    images: {
      page: "",
    },
    description: `Filler is a 42 project to learn about Algorithm. The goal is to be the last player to put a piece, that can have any size and shape, sent by the Filler Virtual Machine.
      To put a piece it needs to overlap one player's cell and only one and not overlap any of the challengers cells.
      `,
    repository: "https://github.com/Seojun-Park/42_projects/tree/main/filler",
  },
];

export const stackIcon = [
  {
    title: "typescript",
    logo:
      "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/typescript.png?alt=media&token=4e24cc99-173c-420d-a88a-76009e504df4",
  },
  {
    title: "ReactJS",
    logo:
      "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/react.png?alt=media&token=b8bd8acc-23e1-4989-90bd-f45b52ee8fd2",
  },
  {
    title: "apollo",
    logo:
      "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/apollo.png?alt=media&token=2ac67ed0-90f4-473a-a8df-bc353eff5279",
  },
  {
    title: "GraphQL",
    logo:
      "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/graphql.png?alt=media&token=5fbd52e2-825e-4b7c-b684-59f66030efe2",
  },
  {
    title: "NodeJS",
    logo:
      "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/nodejs.png?alt=media&token=e68d1183-ce61-4b2d-9ac5-5eac43ea505e",
  },
  {
    title: "Postgres",
    logo:
      "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/postgres.png?alt=media&token=3e0888d8-b1b7-40d9-a52e-127b150c857f",
  },
  {
    title: "firebase",
    logo:
      "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/firebase.png?alt=media&token=3e5a60aa-372c-4575-aafe-ef680ee755b2",
  },
  {
    title: "C",
    logo:
      "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/C.png?alt=media&token=98ce09af-c70b-461f-befe-96e8d9178d30",
  },
  {
    title: "PHP",
    logo:
      "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/camagru%2Fphp.png?alt=media&token=d02aae7f-d0e7-4e37-ab0f-430f0dccdc6b",
  },
  {
    title: "Docker",
    logo:
      "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/camagru%2Fdocker.png?alt=media&token=a4da9cf4-5b6d-413e-9da6-fbb2c0ab41d6",
  },
  {
    title: "MariaDB",
    logo:
      "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/camagru%2Fmariadb.png?alt=media&token=523465f7-50c6-4fb5-a588-0dd64fd1db36",
  },
  {
    title: "HTML / CSS / JAVASCRIPT",
    logo:
      "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/camagru%2Fhtml.png?alt=media&token=f0583a95-bf2e-44a7-a117-6e67555a7e78",
  },
];

export const githubLogo =
  "https://firebasestorage.googleapis.com/v0/b/resume-1ac93.appspot.com/o/gihub.png?alt=media&token=a02faa2d-105e-4003-b868-ba42db654f92";
