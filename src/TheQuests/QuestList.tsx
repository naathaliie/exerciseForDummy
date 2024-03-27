/* Version 1
Börja med att quests har id, beskrivning och en flagga för avklarad.

Vi ska ha ett antal ofärdiga quests när vi startar appen.

Man ska kunna toggla ett quest att vara avklarat eller inte. 
Det kan vara checkboxar man klickar i och ur, eller någon annan design. 

Version 2
Man ska kunna lägga till nya quests i listan. Lägg till ett inputfält och en knapp.

Version 3
Man ska kunna redigera och ta bort befintliga quests. 
Förslagsvis en Edit-knapp och Delete-knapp.*/

import "./QuestList.scss";
import { useRef, useState } from "react";
import { Quest, initialQuests } from "../types/questTypes";
import uuid from "react-uuid";
//Skapar en typ(struktur) för hur varje quest ska se ut(innehålla)

const QuestList = () => {
  //För att visa upp alla initialQuests (quests) och för att kunna ändra (setQuest)
  const [quests, setQuest] = useState(initialQuests);
  const qNameRef = useRef<HTMLInputElement>(null);
  const qDescRef = useRef<HTMLInputElement>(null);
  //För att kkunna toggla mellan edit-mode och vanligt-mode
  const [editMode, setEditMode] = useState<null | string>(null);
  //För att sätta det valda questets namn som input
  const [editName, setEditName] = useState("");
  //För att sätta det valda questets beskrivning som input
  const [editDescription, setEditDescription] = useState("");

  console.log("Quests: ", quests);

  //Vad som händer när man klickar på "lägg till"
  const addQuestHandler = () => {
    //Kollar om inputfälten fått ett värde
    if (qNameRef.current?.value && qDescRef.current?.value) {
      //Skapar det nya questet
      const newQuest: Quest = {
        id: uuid(),
        name: qNameRef.current.value,
        description: qDescRef.current.value,
        complete: false,
      };
      //Anropar setQuests() och öppnar upp arrayen quests och efter , lägger till det nya questet
      setQuest([...quests, newQuest]);
      qNameRef.current.value = "";
      qDescRef.current.value = "";
    }
  };

  //Vad som händer när man klickar på delete
  const deleteQuestHandler = (id: string) => {
    console.log("Det klickade id:t = ", id);
    //Ta bort det klickade questet
    const sortedQuests = quests.filter((q) => {
      return q.id !== id;
    });

    setQuest(sortedQuests);
  };

  //Vad som händer när man klickar på edit-knappen.
  const toggleEditMode = (id: string) => {
    //Om editMode är samma som id skall editMode bli som default, null
    if (editMode === id) {
      setEditMode(null);
    } // Annars skall editMode bli samma som id
    else {
      setEditMode(id);
      //Hitta det klickade questet
      const questToEdit = quests.find((q) => {
        return q.id === id;
      });
      //Om vi hittar det klickade questet så
      if (questToEdit) {
        setEditName(questToEdit.name);
        setEditDescription(questToEdit.description);
      }
    }
  };

  //Vad som händer när man klickar på spara i edit-läget
  const saveEditHandler = () => {
    //Skapar det nya questet
    const updatedQuest = quests.map((q) =>
      q.id === editMode
        ? { ...q, name: editName, description: editDescription }
        : q
    );
    setQuest(updatedQuest);
    setEditMode(null);
  };

  return (
    <div className="questListBox">
      <h1>The quests</h1>

      <section className="questSect">
        <section className="addQuestDiv">
          <p>Add new quest:</p>
          <label htmlFor="qName">Name</label>
          <input id="qName" type="text" ref={qNameRef} />
          <label htmlFor="qDesc">Description: </label>
          <input id="qDesc" type="text" ref={qDescRef} />
          <button onClick={addQuestHandler}>Lägg till</button>
        </section>

        <section className="allQuestSect">
          <p>All the quests:</p>
          {quests.map((q) => {
            return (
              <ul key={q.id}>
                <li>
                  {editMode === q.id ? (
                    <input
                      type="text"
                      value={editName}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setEditName(e.target.value);
                      }}
                    />
                  ) : (
                    `Quest: ${q.name}`
                  )}
                </li>
                <li>
                  {editMode === q.id ? (
                    <input
                      type="text"
                      value={editDescription}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setEditDescription(e.target.value);
                      }}
                    />
                  ) : (
                    `Description: ${q.description}`
                  )}
                </li>
                {/* Span används för att ge mer kontroll över utseendet (behåller det precis som emojin ser ut) te.x en button hade ändrat på utseendet*/}
                <li>
                  Complete:{" "}
                  {q.complete ? (
                    <span
                      onClick={() => {
                        console.log("Du klickade på ibockad med id", q.id);
                        /* true ska bli false på det klickade questet */
                        setQuest(
                          quests.map((quest) => {
                            if (q.id === quest.id) {
                              return { ...q, complete: false };
                            } else {
                              return quest;
                            }
                          })
                        );
                      }}
                    >
                      ✅
                    </span>
                  ) : (
                    <span
                      onClick={() => {
                        /* false ska bli true på det klickade questet */
                        setQuest(
                          quests.map((quest) => {
                            if (q.id === quest.id) {
                              return { ...q, complete: true };
                            } else {
                              return quest;
                            }
                          })
                        );
                      }}
                    >
                      🟩
                    </span>
                  )}
                </li>
                <div className="button-box">
                  {editMode === q.id ? (
                    <button className="btn save" onClick={saveEditHandler}>
                      Spara
                    </button>
                  ) : (
                    <button
                      className="btn edit"
                      onClick={() => {
                        toggleEditMode(q.id);
                      }}
                    >
                      Redigera
                    </button>
                  )}
                  <button
                    className="btn delete"
                    onClick={() => {
                      deleteQuestHandler(q.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </ul>
            );
          })}
        </section>
      </section>
    </div>
  );
};

export default QuestList;
