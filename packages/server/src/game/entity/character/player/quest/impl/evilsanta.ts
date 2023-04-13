import Quest from '../quest';

import log from '@kaetram/common/util/log';

import type Player from '../../player';
import type { ProcessedDoor } from '@kaetram/common/types/map';
import type { RawQuest } from '@kaetram/common/types/quest';

export default class EvilSanta extends Quest {
    public constructor(key: string, rawData: RawQuest) {
        super(key, rawData);
    }

    protected override handleDoor(door: ProcessedDoor, player: Player): void {
        log.debug(`[${this.name}] Дверь: ${door.x}-${door.y} - Этап: ${this.stage}.`);

        if (this.stage === 0) return player.notify(`Погодите, зачем мне туда идти?`);

        // If the player is not on the correct stage, don't let them through.
        if (this.stage < door.stage)
            return player.notify(`Думаю, мне пока не стоит туда заходить...`);

        // Handle door requiring an item to proceed (and remove the item from the player's inventory).
        if (door.reqItem) {
            let count = door.reqItemCount || 1;

            if (!player.inventory.hasItem(door.reqItem, count))
                return player.notify('У вас нет необходимого ключа, чтобы пройти через эту дверь.');

            player.inventory.removeItem(door.reqItem, count);

            player.notify(`Ключ рассыпается в пыль, когда вы проходите через дверь.`);
        }

        // Let the super class handle the rest.
        super.handleDoor(door, player);
    }
}
