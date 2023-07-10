import React, { useState } from "react";

export default function AppMentors() {
  const [person, setPerson] = useState(initialPerson);
  const handleUpdate = () => {
    const name = prompt("바꾸고 싶은 멘토의 이름은?");
    const changeName = prompt("바꾸려는 새 멘토의 이름은?");
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.map((mentor) => {
        if (mentor.name === name) {
          return { ...mentor, name: changeName };
        }
        return mentor;
      }),
    }));
  };
  const handleAdd = () => {
    const name = prompt("추가하려는 멘토 이름은?");
    const title = prompt("추가하려는 멘토 직함은?");
    setPerson((person) => ({
      ...person,
      mentors: [...person.mentors, { name, title }],
    }));
  };
  const handleDelete = () => {
    const name = prompt("삭제하려는 멘토의 이름은?");
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.filter((mentor) => mentor.name !== name),
    }));
  };
  return (
    <div>
      <h1>
        {person.name}은 {person.title}
      </h1>
      <p>{person.name}의 멘토는?</p>
      <p>{person.mentors.name}</p>
      <p>{person.mentors.title}</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>멘토의 이름을 바꾸기</button>
      <button onClick={handleAdd}>멘토 이름 추가하기</button>
      <button onClick={handleDelete}>멘토 이름 삭제하기</button>
    </div>
  );
}

const initialPerson = {
  name: "주현",
  title: "개발자",
  mentors: [
    {
      name: "밥",
      title: "시니어개발자",
    },
    {
      name: "제임스",
      title: "주니어개발자",
    },
  ],
};
