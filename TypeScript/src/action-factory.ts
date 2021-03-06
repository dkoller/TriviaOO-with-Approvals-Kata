import { Action } from "./action";
import { Base } from "./base";
import { Categories } from "./categories";
import { CorrectFactory } from "./correct-factory";
import { CurrentPlayer } from "./current-player";
import { PenaltyBox } from "./penalty-box";
import { Places } from "./places";
import { PlayerNames } from "./player-names";
import { Purses } from "./purses";
import { QuestionsByCategory } from "./questions-by-category";
import { Wrong } from "./wrong";

export class ActionFactory extends Base {

    public constructor(
        currentPlayer: CurrentPlayer,
        names: PlayerNames,
        places: Places,
        purses: Purses,
        penaltyBox: PenaltyBox,
        categories: Categories,
        questions: QuestionsByCategory,
        isGettingOutOfPenaltyBox: boolean[]) {
        super(currentPlayer,
            names,
            places,
            purses,
            penaltyBox,
            categories,
            questions,
            isGettingOutOfPenaltyBox);
    }

    public create(random): Action {
        let action: Action;
        if (Math.floor(random() * 10) == 7) {
            action = this.wrongAnswer();
        } else {
            action = this.wasCorrectlyAnswered();
        }
        return action;
    }

    public wasCorrectlyAnswered(): Action {
        const factory = new CorrectFactory(this.currentPlayer,
            this.names,
            this.places,
            this.purses,
            this.penaltyBox,
            this.categories,
            this.questions,
            this.isGettingOutOfPenaltyBox);
        return factory.create();
    }

    public wrongAnswer(): Action {
        return new Wrong(this.currentPlayer,
            this.names,
            this.places,
            this.purses,
            this.penaltyBox,
            this.categories,
            this.questions,
            this.isGettingOutOfPenaltyBox);
    }

}
