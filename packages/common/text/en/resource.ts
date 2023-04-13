import { Modules } from '@kaetram/common/network';

export default {
    INVALID_WEAPON(type: Modules.Skills) {
        switch (type) {
            case Modules.Skills.Lumberjacking: {
                return 'Чтобы рубить деревья, необходимо вооружиться топором.';
            }

            case Modules.Skills.Mining: {
                return 'Чтобы добывать камни, нужно орудовать киркой.';
            }

            default: {
                return 'INVALID_WEAPON() NOT IMPLEMENTED';
            }
        }
    },
    INVALID_LEVEL(type: Modules.Skills, level: number) {
        switch (type) {
            case Modules.Skills.Lumberjacking: {
                return `Вы должны быть уровня ${level}, чтобы срубить это дерево.`;
            }

            case Modules.Skills.Mining: {
                return `Вы должны быть уровня ${level}, чтобы добыть этот камень.`;
            }

            default: {
                return 'INVALID_LEVEL() NOT IMPLEMENTED';
            }
        }
    },
    INVENTORY_FULL: 'У вас недостаточно места в инвентаре.',
    UNABLE_TO_INTERACT(type: Modules.Skills) {
        switch (type) {
            case Modules.Skills.Lumberjacking: {
                return 'В данный момент вы не можете спилить это дерево.';
            }

            case Modules.Skills.Mining: {
                return 'У вас нет необходимых знаний для добычи этой породы.';
            }

            default: {
                return 'UNABLE_TO_INTERACT() NOT IMPLEMENTED';
            }
        }
    },
    NO_REASON: 'У вас нет причин спиливать это дерево.'
};
