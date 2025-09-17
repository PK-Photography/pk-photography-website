"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import axiosInstance from "../../utils/axiosConfig";

const Pricing = ({ serviceName }) => {
  const [subServices, setSubServices] = useState([]);

  useEffect(() => {
    const fetchSubServices = async () => {
  try {
    const response = await axiosInstance.get(`/subServices/${serviceName}`);
    if (response.status !== 400 && response.status !== 500) {
      setSubServices(response.data);
    }
  } catch (error) {
    console.error("Error fetching subServices:", error);
  }
};
    fetchSubServices();
  }, [serviceName]);
  const router = useRouter();

  const navToBook = ()=> {
    router.push("/booking");
  }

  return (
    <PricingSection>
      <SectionHeader>
        <SectionTitle>Flexible Pricing That Suits Your Needs</SectionTitle>
        <SectionDescription>
          Every event is unique, and so are your requirements. Our pricing is
          structured to offer flexible packages that cater to different needs
          and budgets. We offer three main packages:
        </SectionDescription>
      </SectionHeader>
      {subServices.length === 0 ? (
        <PricingCardsContainer>
          <PricingCard>
            <PackageHeader>
              <PackageIcon>📌</PackageIcon>
              <PackageName>Basic Package</PackageName>
            </PackageHeader>

            <PackagePrice>
              <CurrencySymbol>₹</CurrencySymbol>8,000{" "}
              <Duration>(3 Hours)</Duration>
            </PackagePrice>

            <PackageSummary>
              <SummaryIcon>📷</SummaryIcon> Effortless & Reliable Streaming – A
              solid choice for events that need professional live coverage
              without the frills.
            </PackageSummary>

            <FeaturesList>
              <FeaturesTitle>
                <CheckIcon>✅</CheckIcon> What You Get:
              </FeaturesTitle>
              <FeatureItem>
                <CheckMark>✓</CheckMark> Single-camera setup on a sturdy tripod
              </FeatureItem>
              <FeatureItem>
                <CheckMark>✓</CheckMark> HD-quality streaming with clear visuals
              </FeatureItem>
              <FeatureItem>
                <CheckMark>✓</CheckMark> Professional audio setup for crisp
                sound
              </FeatureItem>
              <FeatureItem>
                <CheckMark>✓</CheckMark> Ideal for church services, webinars,
                small meetings
              </FeatureItem>
            </FeaturesList>

            <UpgradeOption>
              <UpgradeIcon>✨</UpgradeIcon> Upgrade Option: Add extra hours at
              just ₹3,000/hr!
            </UpgradeOption>

            <PerfectFor>
              <DiamondIcon>♦</DiamondIcon> Perfect for: Small gatherings,
              speaker sessions, religious services
            </PerfectFor>

            <ActionButton onClick={navToBook}>Get Started</ActionButton>
          </PricingCard>

          <PricingCard featured>
            <PopularTag>Popular</PopularTag>
            <PackageHeader>
              <PackageIcon>📌</PackageIcon>
              <PackageName>Standard Package</PackageName>
            </PackageHeader>

            <PackagePrice>
              <CurrencySymbol>₹</CurrencySymbol>15,000{" "}
              <Duration>(3 Hours)</Duration>
            </PackagePrice>

            <PackageSummary>
              <SummaryIcon>📷</SummaryIcon> Two Cameras, Twice the Impact! –
              Give your audience a multi-angle experience with smooth
              transitions.
            </PackageSummary>

            <FeaturesList>
              <FeaturesTitle>
                <CheckIcon>✅</CheckIcon> What You Get:
              </FeaturesTitle>
              <FeatureItem>
                <CheckMark>✓</CheckMark> Dual-camera setup (both on tripods) for
                dynamic switching
              </FeatureItem>
              <FeatureItem>
                <CheckMark>✓</CheckMark> Basic live editing & scene transitions
              </FeatureItem>
              <FeatureItem>
                <CheckMark>✓</CheckMark> Professional audio setup for crisp
                sound
              </FeatureItem>
              <FeatureItem>
                <CheckMark>✓</CheckMark> Ideal for corporate meetings, panel
                discussions, and mid-scale weddings
              </FeatureItem>
            </FeaturesList>

            <UpgradeOption>
              <UpgradeIcon>✨</UpgradeIcon> Upgrade Option: Extend coverage at
              just ₹5,000/hr!
            </UpgradeOption>

            <PerfectFor>
              <DiamondIcon>♦</DiamondIcon> Perfect for: Corporate events, panel
              discussions, training sessions
            </PerfectFor>

            <ActionButton onClick={navToBook}>Get Started</ActionButton>
          </PricingCard>

          <PricingCard>
            <PackageHeader>
              <PackageIcon>📌</PackageIcon>
              <PackageName>Premium Package</PackageName>
            </PackageHeader>

            <PackagePrice>
              <CurrencySymbol>₹</CurrencySymbol>20,000{" "}
              <Duration>(3 Hours)</Duration>
            </PackagePrice>

            <PackageSummary>
              <SummaryIcon>📷</SummaryIcon> Cinematic Live Streaming – Your
              Event, Your Story! – With three cameras and smooth gimbal shots,
              we take your live stream to the next level.
            </PackageSummary>

            <FeaturesList>
              <FeaturesTitle>
                <CheckIcon>✅</CheckIcon> What You Get:
              </FeaturesTitle>
              <FeatureItem>
                <CheckMark>✓</CheckMark> Three-camera setup: Two on tripods for
                stable coverage
              </FeatureItem>
              <FeatureItem>
                <CheckMark>✓</CheckMark> One on a gimbal for cinematic movement
              </FeatureItem>
              <FeatureItem>
                <CheckMark>✓</CheckMark> Live mixing for seamless scene
                transitions
              </FeatureItem>
              <FeatureItem>
                <CheckMark>✓</CheckMark> Upgraded audio for better sound clarity
              </FeatureItem>
              <FeatureItem>
                <CheckMark>✓</CheckMark> Perfect for weddings, concerts, fashion
                shows, and big corporate launches
              </FeatureItem>
            </FeaturesList>

            <UpgradeOption>
              <UpgradeIcon>✨</UpgradeIcon> Upgrade Option: Extra hour? No
              problem – just ₹6,000/hr!
            </UpgradeOption>

            <PerfectFor>
              <DiamondIcon>♦</DiamondIcon> Perfect for: Large weddings, Sports,
              high-profile events, music gigs, and award shows
            </PerfectFor>

            <ActionButton onClick={navToBook}>Get Started</ActionButton>
          </PricingCard>
        </PricingCardsContainer>
      ) : <PricingCardsContainer>
    {subServices.map((subService) => (
      <PricingCard key={subService._id || subService.name}>
        <PackageHeader>
          <PackageIcon>📌</PackageIcon>
          <PackageName>{subService.name}</PackageName>
        </PackageHeader>

        <PackagePrice>
          <CurrencySymbol>₹</CurrencySymbol>
          {subService.price} {" "}
          <Duration>({subService.time})</Duration>
        </PackagePrice>

        <PackageSummary>
          <SummaryIcon>📷</SummaryIcon> {subService.description}
        </PackageSummary>

        <FeaturesList>
          <FeaturesTitle>
            <CheckIcon>✅</CheckIcon> What You Get:
          </FeaturesTitle>
          <FeatureItem>{subService.whatYouGet}</FeatureItem>
        </FeaturesList>

        <UpgradeOption>
          <UpgradeIcon>✨</UpgradeIcon> Upgrade Option:{" "}
          {subService.upgradeOption}
        </UpgradeOption>

        <PerfectFor>
          <DiamondIcon>♦</DiamondIcon> Perfect for: {subService.perfectFor}
        </PerfectFor>

        <ActionButton onClick={navToBook}>Get Started</ActionButton>
      </PricingCard>
    ))}
  </PricingCardsContainer>
  }

{/* <CustomPackageContainer>
        <CustomPackageHeader>
          <CustomPackageIcon>📌</CustomPackageIcon>
          <CustomPackageTitle>
            CUSTOM PACKAGE – Tailored for Your Event!
          </CustomPackageTitle>
        </CustomPackageHeader>

        <CustomPackageDescription>
          <CustomPackageIcon>👋</CustomPackageIcon> Your Vision, Our Expertise!
          – Fully customizable solutions for high-end, large-scale productions.
        </CustomPackageDescription>

        <CustomFeaturesList>
          <CustomFeaturesTitle>
            <CheckIcon>✅</CheckIcon> What You Can Get:
          </CustomFeaturesTitle>
          <CustomFeatureItem>
            <CheckMark>✓</CheckMark> Multi-camera live streaming (4+ cameras)
          </CustomFeatureItem>
          <CustomFeatureItem>
            <CheckMark>✓</CheckMark> Gimbal for smooth, wireless camera movement
          </CustomFeatureItem>
          <CustomFeatureItem>
            <CheckMark>✓</CheckMark> Simultaneous live switching between
            multiple feeds
          </CustomFeatureItem>
          <CustomFeatureItem>
            <CheckMark>✓</CheckMark> Tailored to your event&apos;s duration &
            scale
          </CustomFeatureItem>
        </CustomFeaturesList>

        <CustomPerfectFor>
          <DiamondIcon>♦</DiamondIcon> Perfect for:
          <br />
          <DiamondIcon>♦</DiamondIcon> Major concerts, sports tournaments,
          political rallies, high-end corporate summits
        </CustomPerfectFor>

        <DisclaimerText>
          *Final price may vary based on specific requirements
        </DisclaimerText>
      </CustomPackageContainer> 

      <ContactButton onClick={() => router.push("/booking")}>
        <ContactIcon>💡</ContactIcon> Get in touch for a custom quote! 
      </ContactButton>*/}
    </PricingSection>
  );
};

const PricingSection = styled.section`
  padding: 5rem 2rem;
  background-color: #fafafa;

  @media (max-width: 1024px) {
    padding: 4rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 2.5rem 1rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;

  @media (max-width: 1024px) {
    margin-bottom: 3.5rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 300; /* Lighter weight */
  letter-spacing: 0.5px;

  @media (max-width: 1024px) {
    font-size: 2.2rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const SectionDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  font-weight: 300;
  letter-spacing: 0.3px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const PricingCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto 3rem;

  @media (max-width: 1200px) {
    padding: 0 1rem;
    gap: 1.25rem;
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    max-width: 600px;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

const PricingCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.3s, box-shadow 0.3s;
  border: ${(props) =>
    props.featured ? "2px solid #5c899d" : "1px solid #eaeaea"};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 1200px) {
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1.25rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const PopularTag = styled.div`
  position: absolute;
  top: 0;
  right: 2rem;
  background-color: #5c899d;
  color: white;
  font-weight: 400;
  padding: 0.3rem 1rem;
  border-radius: 0 0 8px 8px;
  font-size: 0.9rem;
  letter-spacing: 0.3px;

  @media (max-width: 480px) {
    right: 1.5rem;
    font-size: 0.8rem;
    padding: 0.25rem 0.8rem;
  }
`;

const PackageHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.7rem;
`;

const PackageIcon = styled.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const PackageName = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  color: #333;
  letter-spacing: 0.3px;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const PackagePrice = styled.div`
  font-size: 2.3rem;
  font-weight: 400;
  color: #5c899dff;
  margin-bottom: 0.7rem;
  letter-spacing: 0.3px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const CurrencySymbol = styled.span`
  font-size: 2rem;
  font-weight: 300;

  @media (max-width: 480px) {
    font-size: 1.7rem;
  }
`;

const Duration = styled.span`
  font-size: 1.1rem;
  color: #666;
  font-weight: 300;
  letter-spacing: 0.3px;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const PackageSummary = styled.div`
  background-color: #f7f9fc;
  padding: 0.8rem;
  border-radius: 6px;

  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #555;
  line-height: 1.4;
  display: flex;
  align-items: flex-start;
  letter-spacing: 0.3px;
  font-weight: 300;

  @media (max-width: 768px) {
    padding: 0.7rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem;
    font-size: 0.85rem;
    margin-bottom: 0.8rem;
  }
`;

const SummaryIcon = styled.span`
  font-size: 1.2rem;
  margin-right: 0.5rem;
  margin-top: 0.1rem;

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
  flex-grow: 1;

  @media (max-width: 768px) {
    margin-bottom: 0.9rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 0.8rem;
  }
`;

const FeaturesTitle = styled.li`
  font-weight: 400;
  color: #333;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  letter-spacing: 0.3px;

  @media (max-width: 480px) {
    margin-bottom: 0.7rem;
  }
`;

const CheckIcon = styled.span`
  margin-right: 0.4rem;
`;

const FeatureItem = styled.li`
  margin-bottom: 0.4rem;
  color: #555;
  display: flex;
  align-items: flex-start;
  line-height: 1.4;
  font-weight: 300;
  letter-spacing: 0.3px;

  @media (max-width: 480px) {
    margin-bottom: 0.35rem;
    font-size: 0.9rem;
  }
`;

const CheckMark = styled.span`
  color: #5c899d;
  font-weight: 400;
  margin-right: 0.5rem;
  flex-shrink: 0;
`;

const UpgradeOption = styled.div`
  color: #555;
  font-size: 0.9rem;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;

  padding: 0.7rem 0;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  font-weight: 300;
  letter-spacing: 0.3px;

  @media (max-width: 768px) {
    padding: 0.6rem 0;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0;
    font-size: 0.85rem;
  }
`;

const UpgradeIcon = styled.span`
  margin-right: 0.5rem;
`;

const PerfectFor = styled.div`
  color: #555;

  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: flex-start;
  line-height: 1.4;
  font-weight: 300;
  letter-spacing: 0.3px;

  @media (max-width: 768px) {
    margin-bottom: 0.9rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 0.8rem;
    font-size: 0.85rem;
  }
`;

const DiamondIcon = styled.span`
  color: #5c899d;
  margin-right: 0.5rem;
  flex-shrink: 0;
`;

const ActionButton = styled.button`
  background-color: #5c899d;
  color: white;
  font-weight: 400;
  padding: 0.8rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
  letter-spacing: 0.5px;

  &:hover {
    background-color: #4c7383;
  }

  @media (max-width: 480px) {
    padding: 0.7rem;
    font-size: 0.95rem;
  }
`;

const CustomPackageContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  max-width: 1200px;
  margin: 0 auto 1.5rem;

  @media (max-width: 1200px) {
    padding: 1.3rem;
    margin: 0 auto 1.3rem;
  }

  @media (max-width: 992px) {
    max-width: 600px;
  }

  @media (max-width: 768px) {
    padding: 1.2rem;
    margin: 0 auto 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    margin: 0 auto 1rem;
  }
`;

const CustomPackageHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;

  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }
`;

const CustomPackageIcon = styled.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const CustomPackageTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 400;
  color: #333;
  letter-spacing: 0.3px;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const CustomPackageDescription = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  color: #555;
  line-height: 1.5;
  font-weight: 300;
  letter-spacing: 0.3px;

  @media (max-width: 768px) {
    margin-bottom: 1.25rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 1rem;
    font-size: 0.95rem;
  }
`;

const CustomFeaturesList = styled.div`
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    margin-bottom: 1.25rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }
`;

const CustomFeaturesTitle = styled.div`
  font-weight: 400;
  color: #333;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  letter-spacing: 0.3px;

  @media (max-width: 480px) {
    margin-bottom: 0.7rem;
  }
`;

const CustomFeatureItem = styled.div`
  margin-bottom: 0.6rem;
  color: #555;
  display: flex;
  align-items: flex-start;
  line-height: 1.5;
  font-weight: 300;
  letter-spacing: 0.3px;

  @media (max-width: 480px) {
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
  }
`;

const CustomPerfectFor = styled.div`
  color: #555;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  line-height: 1.5;
  font-weight: 300;
  letter-spacing: 0.3px;

  @media (max-width: 768px) {
    margin-bottom: 1.25rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 1rem;
    font-size: 0.9rem;
  }
`;

const DisclaimerText = styled.p`
  color: #888;
  font-size: 0.85rem;
  font-style: italic;
  text-align: center;
  margin-top: 1rem;
  font-weight: 300;
  letter-spacing: 0.3px;

  @media (max-width: 480px) {
    font-size: 0.8rem;
    margin-top: 0.8rem;
  }
`;

const ContactButton = styled.button`
  background-color: #5c899d;
  color: white;
  font-weight: 400;
  padding: 1rem 2rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  width: 100%;
  letter-spacing: 0.5px;

  &:hover {
    background-color: #4c7383;
  }

  @media (max-width: 768px) {
    padding: 0.9rem 1.8rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.95rem;
    max-width: 320px;
  }
`;

const LocationIcon = styled.span`
  margin-right: 0.5rem;
`;

const ContactIcon = styled.span`
  margin-right: 0.5rem;
`;

export default Pricing;
