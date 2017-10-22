const heroSprite = {
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

export default heroSprite;