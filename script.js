document.addEventListener("DOMContentLoaded", () => {
	// Sample data for each neighborhood
	const locations = {
		georgetown: {
			title: "Georgetown Spotlight",
			tagline: "High-income, high-intent.",
			overview:
				"We create SEO strategies tailored for luxury services, boutiques, and professionals looking to connect with Georgetown’s discerning clientele. This historic neighborhood blends old-world charm with modern affluence, making it a prime target for premium branding and local search dominance.",
			stats: [
				{ value: "35K+", label: "Median Household Income" },
				{ value: "85%", label: "Homeownership Rate" },
				{ value: "12K", label: "Population" }
			],
			audience: [
				"Affluent residents seeking luxury goods and services",
				"Professionals in law, finance, and consulting",
				"Tourists drawn to historic charm and upscale dining"
			],
			strategy: [
				{
					title: "Localized Content",
					desc:
						"Blog posts and landing pages highlighting Georgetown’s unique lifestyle and businesses."
				},
				{
					title: "Premium Keywords",
					desc:
						"Targeting high-value terms like “luxury Georgetown boutiques” and “Georgetown professional services.”"
				},
				{
					title: "Authority Building",
					desc: "Securing backlinks from local influencers and high-end directories."
				}
			]
		},
		capitolHill: {
			title: "Capitol Hill Spotlight",
			tagline: "Home to professionals and policymakers.",
			overview:
				"Our campaigns are built for high trust, strong calls to action, and local authority signals, targeting Capitol Hill’s influential residents and visitors.",
			stats: [
				{ value: "40K+", label: "Median Household Income" },
				{ value: "70%", label: "Homeownership Rate" },
				{ value: "15K", label: "Population" }
			],
			audience: [
				"Policy makers and government employees",
				"Young professionals in urban settings",
				"Families seeking historic charm"
			],
			strategy: [
				{
					title: "Trust Signals",
					desc: "Content emphasizing credibility and local expertise."
				},
				{
					title: "Geo-Targeted Ads",
					desc: "PPC campaigns for Capitol Hill-specific services."
				},
				{
					title: "Community Engagement",
					desc: "Partnering with local events and organizations."
				}
			]
		},
		dupontCircle: {
			title: "Dupont Circle Spotlight",
			tagline: "Diverse, artistic, and international.",
			overview:
				"We craft geo-optimized content focused on cultural relevance, events, and local partnerships for Dupont Circle’s eclectic community.",
			stats: [
				{ value: "30K+", label: "Median Household Income" },
				{ value: "60%", label: "Homeownership Rate" },
				{ value: "18K", label: "Population" }
			],
			audience: [
				"Artists and creatives",
				"International professionals",
				"Young urban dwellers"
			],
			strategy: [
				{
					title: "Event-Driven Content",
					desc: "Articles tied to local cultural events."
				},
				{ title: "Multilingual SEO", desc: "Targeting diverse language searches." },
				{
					title: "Partnership Links",
					desc: "Collaborating with local galleries and cafes."
				}
			]
		},
		adamsMorgan: {
			title: "Adams Morgan Spotlight",
			tagline: "Vibrant and eclectic.",
			overview:
				"We develop content strategies that capture the energy of this youthful, mobile-first audience—especially for restaurants, wellness, and nightlife.",
			stats: [
				{ value: "28K+", label: "Median Household Income" },
				{ value: "50%", label: "Homeownership Rate" },
				{ value: "20K", label: "Population" }
			],
			audience: [
				"Young professionals and students",
				"Nightlife enthusiasts",
				"Wellness-focused individuals"
			],
			strategy: [
				{
					title: "Mobile-First Content",
					desc: "Optimized for on-the-go searches."
				},
				{
					title: "Local Buzz",
					desc: "Targeting “Adams Morgan nightlife” keywords."
				},
				{
					title: "Social Integration",
					desc: "Leveraging Instagram and TikTok trends."
				}
			]
		},
		shaw: {
			title: "Shaw Spotlight",
			tagline: "Historic meets modern innovation.",
			overview:
				"We help creative entrepreneurs and small businesses build a search presence rooted in storytelling and neighborhood branding in Shaw’s dynamic scene.",
			stats: [
				{ value: "32K+", label: "Median Household Income" },
				{ value: "55%", label: "Homeownership Rate" },
				{ value: "15K", label: "Population" }
			],
			audience: [
				"Creative entrepreneurs",
				"Tech-savvy young adults",
				"History enthusiasts"
			],
			strategy: [
				{
					title: "Storytelling",
					desc: "Content weaving Shaw’s history with modern appeal."
				},
				{
					title: "Niche Keywords",
					desc: "Targeting “Shaw small business” searches."
				},
				{ title: "Creative Collabs", desc: "Partnering with local innovators." }
			]
		}
	};

	const component = document.querySelector(".location-component");
	let currentLocation = component.getAttribute("data-location");
	const locationKeys = Object.keys(locations); // Array of all location keys
	let currentIndex = locationKeys.indexOf(currentLocation); // Track current position

	// Function to render location data
	function renderLocation(locationKey) {
		const data = locations[locationKey];
		if (!data) return;

		component.innerHTML = `
            <div class="location-header">
                <h1>${data.title}</h1>
                <p class="tagline">${data.tagline}</p>
            </div>
            <div class="location-overview">
                <h2>Why ${locationKey.replace("-", " ")}?</h2>
                <p>${data.overview}</p>
            </div>
            <div class="location-stats">
                <h2>Key Stats</h2>
                <div class="stats-grid">
                    ${data.stats
																					.map(
																						(stat) => `
                        <div class="stat-item">
                            <span class="stat-value">${stat.value}</span>
                            <span class="stat-label">${stat.label}</span>
                        </div>
                    `
																					)
																					.join("")}
                </div>
            </div>
            <div class="location-audience">
                <h2>Target Audience</h2>
                <ul>
                    ${data.audience.map((item) => `<li>${item}</li>`).join("")}
                </ul>
            </div>
            <div class="location-strategy">
                <h2>Our SEO Strategy</h2>
                <div class="strategy-grid">
                    ${data.strategy
																					.map(
																						(item) => `
                        <div class="strategy-item">
                            <h3>${item.title}</h3>
                            <p>${item.desc}</p>
                        </div>
                    `
																					)
																					.join("")}
                </div>
            </div>
            <div class="location-cta">
                <button class="cta-button">Optimize for ${locationKey.replace(
																	"-",
																	" "
																)} Now</button>
            </div>
        `;
	}

	// Render initial location
	renderLocation(currentLocation);

	// Create navigation buttons
	const prevButton = document.createElement("button");
	prevButton.textContent = "Previous";
	prevButton.style.position = "fixed";
	prevButton.style.top = "20px";
	prevButton.style.left = "20px";
	prevButton.style.padding = "10px";
	prevButton.style.background = "#3498db";
	prevButton.style.color = "#fff";
	prevButton.style.border = "none";
	prevButton.style.borderRadius = "5px";
	prevButton.style.cursor = "pointer";

	const nextButton = document.createElement("button");
	nextButton.textContent = "Next";
	nextButton.style.position = "fixed";
	nextButton.style.top = "20px";
	nextButton.style.right = "20px";
	nextButton.style.padding = "10px";
	nextButton.style.background = "#3498db";
	nextButton.style.color = "#fff";
	nextButton.style.border = "none";
	nextButton.style.borderRadius = "5px";
	nextButton.style.cursor = "pointer";

	document.body.appendChild(prevButton);
	document.body.appendChild(nextButton);

	// Navigation logic
	function updateLocation(direction) {
		if (direction === "next") {
			currentIndex = (currentIndex + 1) % locationKeys.length; // Cycle forward
		} else if (direction === "prev") {
			currentIndex =
				(currentIndex - 1 + locationKeys.length) % locationKeys.length; // Cycle backward
		}
		currentLocation = locationKeys[currentIndex];
		component.setAttribute("data-location", currentLocation);
		renderLocation(currentLocation);
	}

	nextButton.addEventListener("click", () => updateLocation("next"));
	prevButton.addEventListener("click", () => updateLocation("prev"));
});
const select = document.createElement("select");
select.style.position = "fixed";
select.style.top = "20px";
select.style.right = "20px";
select.innerHTML = locationKeys
	.map((key) => `<option value="${key}">${key.replace("-", " ")}</option>`)
	.join("");
select.addEventListener("change", (e) => {
	currentIndex = locationKeys.indexOf(e.target.value);
	currentLocation = e.target.value;
	renderLocation(currentLocation);
});
document.body.appendChild(select);
