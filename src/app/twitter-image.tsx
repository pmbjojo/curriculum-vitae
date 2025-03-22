import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Curriculum Vitae";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  // You'll need to replace this with your actual profile picture URL
  const profileImageUrl = "/profile.jpg";

  // You can fetch your profile image if it's hosted online
  // const profileImageData = await fetch(new URL(profileImageUrl, 'https://yourdomain.com')).then(
  //   (res) => res.arrayBuffer(),
  // )

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          fontFamily: '"Inter"',
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 40,
            marginBottom: 40,
            width: "100%",
            padding: "0 50px",
          }}
        >
          {/* Profile Picture */}
          <div
            style={{
              display: "flex",
              borderRadius: 128,
              overflow: "hidden",
              width: 200,
              height: 200,
              border: "4px solid #0070f3",
            }}
          >
            {/* Replace with your actual profile picture */}
            <img
              src={profileImageUrl || "/placeholder.svg"}
              alt="Profile"
              width={200}
              height={200}
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Name and Title */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <h1
              style={{
                fontSize: 60,
                fontWeight: "bold",
                color: "#111",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              Your Name
            </h1>
            <h2
              style={{
                fontSize: 36,
                color: "#0070f3",
                margin: 0,
                marginTop: 8,
              }}
            >
              Your Professional Title
            </h2>
          </div>
        </div>

        {/* Brief Summary */}
        <div
          style={{
            display: "flex",
            backgroundColor: "#f5f5f5",
            padding: "20px 40px",
            borderRadius: 16,
            maxWidth: "80%",
          }}
        >
          <p
            style={{
              fontSize: 24,
              color: "#333",
              textAlign: "center",
              margin: 0,
            }}
          >
            Experienced professional with expertise in web development, design,
            and project management. Passionate about creating impactful digital
            experiences.
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
