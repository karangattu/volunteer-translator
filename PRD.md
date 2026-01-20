# Planning Guide

A volunteer translation assistant that helps English-speaking volunteers communicate with non-English speaking guests by providing phonetic translations of common phrases.

**Experience Qualities**:
1. **Immediate** - Translations should be instantly accessible with minimal taps, allowing volunteers to quickly find what they need while assisting guests
2. **Clear** - Phonetic pronunciations must be large, readable, and unambiguous so volunteers can confidently speak them aloud
3. **Reassuring** - The interface should feel calm and organized, reducing stress for volunteers in busy service environments

**Complexity Level**: Light Application (multiple features with basic state)
This is a translation reference tool with language selection, phrase browsing, and pronunciation guides - more than a single-purpose micro tool, but not requiring complex state management or multiple views.

## Essential Features

### Language Selection
- **Functionality**: Toggle between Spanish and Chinese translations
- **Purpose**: Allows volunteers to switch languages based on the guest they're helping
- **Trigger**: User taps on language tabs or buttons at the top of the interface
- **Progression**: View default language (Spanish) → Tap language selector → Translations update immediately
- **Success criteria**: All phrases update to show the selected language's translation and phonetic guide

### Phrase Display
- **Functionality**: Display all 8 common phrases with their translations and phonetic pronunciations
- **Purpose**: Provide quick reference for frequently used volunteer-guest interactions
- **Trigger**: Automatically displayed on app load, updates when language changes
- **Progression**: App loads → All phrases visible in scrollable list → Select language → Phrases update
- **Success criteria**: Each phrase shows English, native translation, and clear phonetic pronunciation guide

### Phonetic Pronunciation Guide
- **Functionality**: Show how to pronounce each translated phrase using English phonetics
- **Purpose**: Enables English speakers to accurately speak phrases without knowing the target language
- **Trigger**: Displayed alongside each translation automatically
- **Progression**: Read English phrase → Read phonetic guide → Speak to guest
- **Success criteria**: Phonetics are large, readable, and use familiar English sound patterns

## Edge Case Handling

- **No Internet Required**: All translations are hardcoded in the app - no external API calls needed
- **Long Phrases**: Card layout accommodates varying phrase lengths without breaking layout
- **Accidental Language Switch**: Immediate visual feedback confirms which language is active
- **Small Screens**: Cards stack vertically with adequate spacing for easy reading on mobile devices

## Design Direction

The design should evoke feelings of **helpfulness, accessibility, and calm confidence**. Volunteers should feel like they have a reliable assistant in their pocket. The interface should be uncluttered, with generous whitespace and large, readable text that can be quickly scanned in busy environments.

## Color Selection

A warm, approachable palette that feels helpful and inviting while maintaining excellent readability.

- **Primary Color**: Deep teal (oklch(0.45 0.12 200)) - conveys trustworthiness and calm professionalism, used for the active language indicator
- **Secondary Colors**: Soft cream background (oklch(0.98 0.01 85)) provides warmth without harsh white glare; Muted slate (oklch(0.55 0.02 240)) for secondary text
- **Accent Color**: Warm coral (oklch(0.68 0.15 25)) for interactive elements and important callouts, creating approachable energy
- **Foreground/Background Pairings**: 
  - Primary (Deep Teal oklch(0.45 0.12 200)): White text (oklch(0.99 0 0)) - Ratio 7.2:1 ✓
  - Background (Soft Cream oklch(0.98 0.01 85)): Dark slate text (oklch(0.25 0.02 240)) - Ratio 12.8:1 ✓
  - Accent (Warm Coral oklch(0.68 0.15 25)): White text (oklch(0.99 0 0)) - Ratio 4.6:1 ✓
  - Card (White oklch(1 0 0)): Dark slate text (oklch(0.25 0.02 240)) - Ratio 14.5:1 ✓

## Font Selection

Typography should be exceptionally readable under pressure, with clear distinction between informational text and phonetic guides.

- **Typographic Hierarchy**:
  - H1 (App Title): Space Grotesk Bold/32px/tight - Modern, approachable feel
  - Language Selector: Space Grotesk Medium/18px/normal - Clear but not overwhelming
  - English Phrase: Space Grotesk Medium/16px/relaxed - Easy to scan
  - Native Translation: Space Grotesk SemiBold/20px/normal - Visible but not primary focus
  - Phonetic Guide: JetBrains Mono Medium/24px/loose - Maximum readability, monospace ensures consistent character spacing

## Animations

Animations should provide gentle feedback without delaying volunteer workflows. Language transitions fade smoothly (200ms) to confirm the switch. Cards have subtle hover lifts (2px transform with 150ms ease) to indicate interactivity. The overall feel should be responsive but never showy - volunteers need information fast.

## Component Selection

- **Components**: 
  - Tabs (Shadcn) for language selection at the top, styled with prominent active states
  - Card (Shadcn) for each phrase block, with generous padding and subtle shadows
  - Badge (Shadcn) for labeling sections like "Say it like:" before phonetics
  - ScrollArea (Shadcn) to ensure all phrases are accessible on smaller screens
- **Customizations**: 
  - Custom phrase cards with three-tier typography (English → Translation → Phonetics)
  - Language tabs customized with flags or language codes for visual recognition
  - Phonetic text in distinctive monospace font with tinted background for clarity
- **States**: 
  - Language tabs show clear active/inactive states with color and underline
  - Cards have subtle hover state (lift + shadow) for tactile feedback
  - No disabled states needed - all content always accessible
- **Icon Selection**: 
  - Globe icon (Phosphor) for the app header to suggest translation/international help
  - Check icon (Phosphor) to confirm the active language selection subtly
- **Spacing**: 
  - Container padding: p-6 (24px) for breathing room
  - Card gaps: gap-4 (16px) between phrase cards
  - Internal card padding: p-6 (24px) for comfortable reading space
  - Section spacing within cards: space-y-3 (12px) between English/Translation/Phonetics
- **Mobile**: 
  - Single column layout on all screens for maximum readability
  - Language tabs span full width and stack if needed on very small screens
  - Minimum touch target of 48px for language selector tabs
  - Font sizes remain large (no reduction) to maintain readability
  - Cards fill width with consistent padding, ensuring no horizontal scroll needed
