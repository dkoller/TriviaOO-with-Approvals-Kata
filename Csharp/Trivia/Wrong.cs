using System;

namespace UglyTrivia
{
    public class Wrong : Base, Action
    {
        public Wrong(CurrentPlayer currentPlayer, PlayerNames names, Places places, Purses purses, PenaltyBox penaltyBox, Categories categories, QuestionsByCategory questions, bool[] isGettingOutOfPenaltyBox)
            : base(currentPlayer, names, places, purses, penaltyBox, categories, questions, isGettingOutOfPenaltyBox)
        {
        }

        public bool Execute()
        {
            Println();
            penaltyBox.Set(currentPlayer.Get(), true);
            currentPlayer.Inc();
            return true;
        }

        private void Println()
        {
            Console.WriteLine("Question was incorrectly answered");
            penaltyBox.Println();
        }
    }
}
