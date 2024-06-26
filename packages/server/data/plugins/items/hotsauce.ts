import { Modules } from '@kaetram/common/network';

import type { Plugin } from '.';
import type Player from '@kaetram/server/src/game/entity/character/player/player';

export default class HotSauce implements Plugin {
    public onUse(player: Player): boolean {
        if (player.status.has(Modules.Effects.HotSauce)) {
            player.notify(`I really shouldn't be drinking multiple of these...`);
            return false;
        }

        player.notify(`Вы чувствуете сильный прилив адреналина, вам кажется, что вы можете бежать вечно.`);

        // Update the hot sauce effect.
        player.setRunning(false, true);

        setTimeout(() => {
            player.setRunning(false, false);
            player.notify('Эффект острого соуса ослаб.');
        }, 15_000);

        return true;
    }
}
