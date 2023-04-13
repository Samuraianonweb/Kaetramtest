import type { Plugin } from '.';
import type Player from '@kaetram/server/src/game/entity/character/player/player';

export default class BlackPotion implements Plugin {
    public onUse(player: Player): boolean {
        player.notify(`Вы выпиваете черное зелье и начинаете чувствовать себя плохо.`);

        setTimeout(() => player.hit(player.hitPoints.getHitPoints() - 1), 5000);

        return true;
    }
}
