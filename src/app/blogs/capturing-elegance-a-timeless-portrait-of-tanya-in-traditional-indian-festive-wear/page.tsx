import React from 'react';
import Image from 'next/image';

const TanyaBlog = () => {
  return (
    <article style={{ maxWidth: '700px', margin: 'auto', padding: '1rem', fontFamily: "'Georgia', serif" }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
        I Don’t Know How To Make You Care What ChatGPT Is Quietly Doing
      </h1>
      <p style={{ color: 'gray', marginBottom: '2rem' }}>
        By Tanya — August 5, 2025
      </p>

      <Image
        src="/portfolioImages/blog/tanya-cover.jpg" // Replace with actual path or URL
        alt="ChatGPT Article Cover"
        width={700}
        height={400}
        style={{ borderRadius: '8px', marginBottom: '2rem' }}
      />

      <p>
        ChatGPT, the AI language model that has taken the world by storm, is quietly evolving in ways that few people notice...
      </p>

      {/* Add the full blog content paragraphs below */}
      <p>
        The latest developments in AI language processing promise to transform industries, change communication, and redefine creativity.
      </p>

      <p>
        But here’s the catch: most users only see the surface. The deeper changes are happening behind the scenes, without headlines or fanfare...
      </p>

      {/* Continue with all paragraphs, subheadings, images as needed */}

      <h2>Why Should You Care?</h2>
      <p>
        Because these subtle shifts affect how AI can serve you personally, professionally, and culturally. Ignoring them means missing out on...
      </p>

      {/* And so on... */}

      <footer style={{ marginTop: '4rem', fontSize: '0.9rem', color: 'gray' }}>
        © 2025 Tanya’s Blog. All rights reserved.
      </footer>
    </article>
  );
};

export default TanyaBlog;
