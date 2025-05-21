/* eslint-disable @next/next/no-img-element */

import { ImageResponse } from "next/og";
import { resume } from "@/data";

export const alt = "Curriculum Vitae";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
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
            <img
              src={`https://joshua-jourdam.vercel.app/profile.jpg`}
              alt="Profile"
              width={200}
              height={200}
              style={{ objectFit: "cover" }}
            />
          </div>

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
              {resume.firstName} {resume.lastName}
            </h1>
            <h2
              style={{
                fontSize: 36,
                color: "#0070f3",
                margin: 0,
                marginTop: 8,
              }}
            >
              {resume.title}
            </h2>
          </div>
        </div>

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
            {resume.summary}
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
