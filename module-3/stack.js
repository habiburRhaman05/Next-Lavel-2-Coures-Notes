/**
 * 🧠 STACK DATA STRUCTURE — Quick Revision Notes (Bangla + English Mix)
 * Author: Habib
 * 
 * ▶ Stack হলো একটা linear data structure যেটা LIFO principle follow করে —
 *    👉 Last In → First Out
 * 
 * অর্থাৎ, শেষ যে element ঢোকে, সেটাই প্রথমে বের হয়।
 */

const stackNotes = `
───────────────────────────────
🔹 What is Stack?
───────────────────────────────
Stack হলো এমন একটি linear data structure যেখানে LIFO (Last In, First Out) principle কাজ করে।
👉 Example: বইয়ের স্ট্যাক — সবচেয়ে উপরে রাখা বইটা আগে উঠবে।

───────────────────────────────
💡 Why Use Stack?
───────────────────────────────
✔ Function call management (Call stack)
✔ Undo / Redo operations
✔ Expression parsing (Bracket matching, Infix → Postfix)
✔ DFS & Backtracking
✔ Browser history navigation

───────────────────────────────
⚙️ Core Operations (সব O(1))
───────────────────────────────
1️⃣ push(x) → top-এ element add করে
2️⃣ pop() → top element remove করে return করে
3️⃣ peek() → top element শুধু দেখে, remove করে না
4️⃣ isEmpty() → stack ফাঁকা কি না চেক করে
5️⃣ size() → কত elements আছে জানায়

🧩 Rules:
👉 LIFO — Last In First Out
👉 Overflow → full stack এ push করা
👉 Underflow → empty stack থেকে pop করা

───────────────────────────────
🧾 Key Terms
───────────────────────────────
🔸 Top → সর্বশেষ যোগ করা element
🔸 Capacity → stack এর সর্বোচ্চ আকার (যদি fixed হয়)
🔸 Overflow / Underflow → invalid push/pop operation
🔸 Amortized cost → dynamic array resize cost average O(1)

`
// ───────────────────────────────
// 💻 Implementation (JavaScript Version)
// ───────────────────────────────
class Stack {
  constructor() {
    this.items = []; // JS array works as dynamic stack
  }

  // ➕ Add element (push)
  push(element) {
    this.items.push(element);
  }

  // ➖ Remove element (pop)
  pop() {
    if (this.isEmpty()) throw new Error("Stack Underflow ❌");
    return this.items.pop();
  }

  // 👀 See top element
  peek() {
    if (this.isEmpty()) throw new Error("Stack is empty!");
    return this.items[this.items.length - 1];
  }

  // 🕳️ Check empty or not
  isEmpty() {
    return this.items.length === 0;
  }

  // 🔢 Total size
  size() {
    return this.items.length;
  }
   print() {
    if (this.isEmpty()) {
      console.log("⚠️ Stack is empty!");
      return;
    }
    console.log("🧱 Current Stack (Top → Bottom):");
    [...this.items].reverse().forEach((item, i) => {
      console.log(`  ${i + 1}. ${item}`);
    });
  }

  // 🧹 Optional → Clear stack
  clear() {
    this.items = [];
  }
}

// 🔍 Usage Example
const s = new Stack();
s.push(10);
s.push(20);
console.log("Peek:", s.peek()); // 20
console.log("Pop:", s.pop());   // 20
console.log("Empty?", s.isEmpty()); // false
console.log("Size:", s.size()); // 1
`
───────────────────────────────
⚡ Real-life Use Cases
───────────────────────────────
✔ Function Call Stack → recursion, return addresses
✔ Undo/Redo → last change before first
✔ Browser History → back to last page
✔ Parenthesis Matching → parsing algorithms
✔ DFS / Backtracking → explore & return

───────────────────────────────
🧮 Complexity Summary
───────────────────────────────
⏱️ Time:
 push → O(1)
 pop  → O(1)
 peek → O(1)
 isEmpty / size → O(1)

💾 Space: O(n)

───────────────────────────────
🧠 Quick Review
───────────────────────────────
🔸 Concept: LIFO
🔸 Core Ops: push, pop, peek, isEmpty, size
🔸 Use: call stack, undo, DFS, parsing
🔸 Impl: Array / Linked List
🔸 Caution: underflow, overflow, concurrency
🔸 Variants: Min/Max Stack, Thread-safe, Persistent Stack
───────────────────────────────`
