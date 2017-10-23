export const heroSprite = {
    name: "hero-header-pose",
    size: { width: 75, height: 84 },
    animationTypes: ['IDLE'],
    frames: [
        require('../images/mock-character.png'),
        require('../images/mock-character-2.png')
    ],
    animationIndex: function getAnimationIndex(animationType) {
        switch (animationType) {
            case 'IDLE':
                return [0, 1];
        }
    }
};

export const UI_HEADER_EXP_START_SPRITE = {
    name: "ui-header-exp-start",
    size: { width: 16, height: 64},
    frames: [require('../images/ui-header-exp-start.png')]
};

export const UI_HEADER_EXP_PROGRESS_SPRITE = {
    name: "ui-header-exp-progress",
    size: { width: 16, height: 64},
    frames: [require('../images/ui-header-exp-progress.png')]
};
