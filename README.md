This project is an attempt at building a Photo Album app as specified in this [hackathon challange](https://github.com/panaverse/learn-nextjs/blob/main/HACKATHONS/00.hackathon_zero/readme.md)

This [tutorial](https://www.youtube.com/watch?v=MC6D4vylKTc) by [Web Dev Cody](https://github.com/webdevcody) has been followed


## Technologies Used

- Next.js
- Cloudinary
- Shadcn UI
- Tailwind CSS

## Running Locally

1. Clone the repository
```
git clone https://github.com/AbdullahKhetran/cloudinary-photos-app.git
```

2. Refer to Cloudinary [documentation](https://next.cloudinary.dev/installation) and add the following evironment variables
```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
NEXT_PUBLIC_UPLOAD_PRESET_ID=""
CLOUDINARY_URL=""
```

3. Install the packages
```
npm i
```

4. Start the server
```
npm run dev
```

5. Visit [localhost](http://localhost:3000/)