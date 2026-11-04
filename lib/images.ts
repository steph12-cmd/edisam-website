export type Photo = { src: string; width: number; height: number };

// Generated from the school photos. EXIF/location data removed.
export const photos = {
  heroClass: { src: "/images/hero-class-group.jpg", width: 1280, height: 960 },
  pupilsFriends: { src: "/images/pupils-two-friends.jpg", width: 960, height: 1280 },
  pupilsOnJet: { src: "/images/pupils-on-jet.jpg", width: 960, height: 1280 },
  nurseryFriends: { src: "/images/nursery-friends.jpg", width: 960, height: 1280 },
  primaryGroup: { src: "/images/primary-class-group.jpg", width: 1280, height: 720 },
  footballGroup: { src: "/images/football-pitch-group.jpg", width: 1280, height: 720 },
  campusCourtyard: { src: "/images/campus-courtyard.jpg", width: 1280, height: 720 },
  campusBuilding: { src: "/images/campus-building.jpg", width: 1280, height: 720 },
  pupilsGreenWall: { src: "/images/pupils-green-wall.jpg", width: 960, height: 1280 },
  boysRedKits: { src: "/images/boys-red-kits.jpg", width: 1280, height: 960 },
  footballTeam: { src: "/images/football-team.jpg", width: 1280, height: 720 },
  culturalCrown: { src: "/images/cultural-crown.jpg", width: 960, height: 1280 },
  culturalSpeaker: { src: "/images/cultural-speaker.jpg", width: 960, height: 1280 },
  culturalWaxPrint: { src: "/images/cultural-wax-print.jpg", width: 960, height: 1280 },
  culturalSmock: { src: "/images/cultural-smock.jpg", width: 960, height: 1280 },
  culturalGreenDress: { src: "/images/cultural-green-dress.jpg", width: 960, height: 1280 },
  prefectsPair: { src: "/images/prefects-pair.jpg", width: 720, height: 1280 },
  prefectsBoys: { src: "/images/prefects-boys.jpg", width: 720, height: 1280 },
  bouncyCastle: { src: "/images/bouncy-castle.jpg", width: 720, height: 1280 },
  facePainting: { src: "/images/face-painting.jpg", width: 720, height: 1280 },
  cottonCandy: { src: "/images/cotton-candy.jpg", width: 720, height: 1280 },
  outingPupilJet: { src: "/images/outing-pupil-jet.jpg", width: 960, height: 1280 },
} as const satisfies Record<string, Photo>;
