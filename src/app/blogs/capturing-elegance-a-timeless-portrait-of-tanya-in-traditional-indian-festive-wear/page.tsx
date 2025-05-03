"use client";

import React from "react";

const TanyaPortraitBlog = () => {
  return (
    <main className="bg-white text-[#0f1110] font-sans min-h-screen">
      {/* Top Banner Image */}
      <div className="w-full h-[400px] lg:h-[500px] relative overflow-hidden">
        <img
          src="/blogs/blog2.jpg"
          alt="Tanya Portrait Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Wrapper */}
      <div className="px-6 py-16 max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4 leading-snug">
            Capturing Elegance: A Timeless Portrait of Tanya in Traditional Indian Festive Wear
          </h1>
          <p className="text-sm text-gray-500">October 12, 2024 · 6 min read</p>
        </header>

        {/* Blog Content */}
        <section className="space-y-6 leading-7">
          <p>
            At PK Photography, we specialise in creating portraits that not only capture beauty but also tell a story. Recently, we had the pleasure of working with Tanya, a stunning model with a natural flair for traditional Indian attire. In this shoot, Tanya wore a pastel pink lehenga that perfectly blended modern elegance with traditional charm.
          </p>

          <p>
            Her minimalistic styling, combined with the subtle beauty of Indian festive wear, created portraits that are nothing short of timeless. In this blog, we’ll take you through how we created these images and share tips on how you can also capture stunning portraits during festive seasons.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-2">1. The Story Behind Traditional Festive Wear Photography</h2>
          <p>
            {`Indian festive attire is more than just fabric—it's an expression of culture, tradition, and celebration. Tanya's choice of a soft pink lehenga with shimmering sequin details embodies simplicity and grace, making it ideal for weddings, festive events, or special occasions.`}
          </p>

          <p>
            Natural light played a huge role in bringing out the soft shimmer in the fabric without overpowering the natural beauty of the model.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-2">2. The Art of Capturing Natural, Timeless Poses</h2>
          <p>
            One of the most important elements of portrait photography is to capture your subject in a way that feels authentic. With Tanya, we aimed for soft, elegant poses that brought out her natural grace while showcasing the attire.
          </p>

          <p>
            The soft draping of her dupatta over her head adds a classic touch, while her expressions remain gentle and poised.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-2">3. Minimalist Styling for Modern Portraits</h2>
          <p>
            Tanya’s makeup was kept minimal, enhancing her natural features with soft, nude tones that complemented the pastel outfit. Her jewelry—a simple, traditional necklace—was the perfect finishing touch.
          </p>

          <p>
            Minimalist styling in portraits allows the subject and the outfit to shine through without distractions, creating a more refined and timeless result.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-2">4. Blending Tradition with Contemporary Photography Techniques</h2>
          <p>
            Although Tanya’s outfit and styling are rooted in tradition, our photography approach brought a modern edge. We used a combination of natural and studio lighting to bring out the soft pastel tones.
          </p>

          <p>
            Close-up shots played a significant role in showcasing the intricate sequin work and jewelry details, adding depth to the overall shoot.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-2">5. The Power of Post-Production: Enhancing What’s Already Beautiful</h2>
          <p>
            Post-production is where the magic happens—but the goal is not to change, but to enhance. For Tanya’s portraits, we focused on enhancing her natural glow and subtly boosting the shimmer of her lehenga.
          </p>

          <p>
            Small tweaks in lighting and contrast gave the photos a cohesive and polished finish without losing their charm.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-2">Get Your Own Portrait Done</h2>
          <p>
            {`If you're inspired by Tanya's stunning shoot, why not book your own portrait session with PK Photography? Whether it’s for a special occasion or just to celebrate yourself in traditional wear, we offer a variety of packages tailored to your needs:`}
          </p>

          <ul className="list-disc ml-6 space-y-4">
            <li>
              <strong>Traditional Portrait Package</strong><br />
              Perfect for festive or wedding outfits.<br />
              2-hour session, 10 edited images.<br />
              <em>Price: ₹15,000</em>
            </li>
            <li>
              <strong>Personalized Portrait Experience</strong><br />
              Custom shoot with wardrobe consult, MUA, 3-hour session, 20 edits + cinematic video.<br />
              <em>Price: ₹30,000</em>
            </li>
            <li>
              <strong>Mini Portrait Package</strong><br />
              1-hour session with 5 edited images.<br />
              <em>Price: ₹7,500</em>
            </li>
          </ul>

          <p className="mt-6">
            Ready to book your session? Contact us today and let us help you create a timeless portrait that you’ll treasure for years to come. For more inspiration, be sure to check out Tanya’s Instagram to see more of her work and style!
          </p>
        </section>
      </div>
    </main>
  );
};

export default TanyaPortraitBlog;