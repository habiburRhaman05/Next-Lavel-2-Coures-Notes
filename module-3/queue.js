/**
 * 🧠 QUEUE DATA STRUCTURE — Quick Revision Notes (Bangla + English Mix)
 * Author: Habib
 * 
 * ▶ Queue হলো একটা linear data structure যেটা FIFO principle follow করে —
 *    👉 First In → First Out
 * 
 * অর্থাৎ, যে element আগে ঢোকে, সেটাই আগে বের হয়।
 */

const queueNotes = `
───────────────────────────────
🔹 What is Queue?
───────────────────────────────
Queue হলো এমন একটি linear data structure যেখানে FIFO (First In, First Out) principle কাজ করে।
👉 Example: ব্যাংক বা বাসের লাইনে যেভাবে মানুষ দাঁড়ায় — প্রথমে যে দাঁড়ায়, সে-ই আগে সার্ভিস পায়।

───────────────────────────────
💡 Why Use Queue?
───────────────────────────────
✔ Scheduling (CPU / Task scheduling)
✔ Printer / Disk Spooling
✔ Customer service systems
✔ BFS Traversal (Graph / Tree)
✔ Data stream buffering (I/O queues, Message queues)

───────────────────────────────
⚙️ Core Operations (সব O(1))
───────────────────────────────
1️⃣ enqueue(x) → element কে queue-এর শেষে add করে  
2️⃣ dequeue() → queue-এর প্রথম element remove করে return করে  
3️⃣ front() → queue-এর প্রথম element শুধু দেখে, remove করে না  
4️⃣ isEmpty() → queue ফাঁকা কি না চেক করে  
5️⃣ size() → কত elements আছে জানায়  

🧩 Rules:
👉 FIFO — First In First Out  
👉 Overflow → full queue তে enqueue করা  
👉 Underflow → empty queue থেকে dequeue করা  

───────────────────────────────
🧾 Key Terms
───────────────────────────────
🔸 Front → প্রথম element (যেটা আগে remove হবে)  
🔸 Rear → শেষ element (যেটা শেষ add হয়)  
🔸 Capacity → সর্বোচ্চ আকার (যদি fixed হয়)  
🔸 Overflow / Underflow → invalid enqueue/dequeue  
🔸 Amortized cost → dynamic resize-এর গড় সময় O(1)

`

// ───────────────────────────────
// 💻 Implementation (JavaScript Version)
// ───────────────────────────────
class Queue {
  constructor() {
    this.items = []; // JS array works as dynamic queue
  }

  // ➕ Add element (enqueue)
  enqueue(element) {
    this.items.push(element);
  }

  // ➖ Remove element (dequeue)
  dequeue() {
    if (this.isEmpty()) throw new Error("Queue Underflow ❌");
    return this.items.shift();
  }

  // 👀 See front element
  front() {
    if (this.isEmpty()) throw new Error("Queue is empty!");
    return this.items[0];
  }

  // 🕳️ Check empty or not
  isEmpty() {
    return this.items.length === 0;
  }

  // 🔢 Total size
  size() {
    return this.items.length;
  }

  // 🧾 Print current queue
  print() {
    if (this.isEmpty()) {
      console.log("⚠️ Queue is empty!");
      return;
    }
    console.log("🚎 Current Queue (Front → Rear):");
    this.items.forEach((item, i) => {
      console.log(`  ${i + 1}. ${item}`);
    });
  }

  // 🧹 Optional → Clear queue
  clear() {
    this.items = [];
  }
}

// 🔍 Usage Example
const q = new Queue();
q.enqueue("A");
q.enqueue("B");
q.enqueue("C");
q.print();
console.log("Front:", q.front()); // A
console.log("Dequeue:", q.dequeue()); // A
console.log("Size:", q.size()); // 2
console.log("Empty?", q.isEmpty()); // false
q.print();

`
───────────────────────────────
⚡ Real-life Use Cases
───────────────────────────────
✔ Printer Queue → first document prints first  
✔ Customer Service Line → serve first caller first  
✔ Task Scheduling → OS, thread management  
✔ BFS Traversal → explore level by level  
✔ Message Queues → asynchronous processing  

───────────────────────────────
🧮 Complexity Summary
───────────────────────────────
⏱️ Time:
 enqueue → O(1)
 dequeue → O(1)
 front → O(1)
 isEmpty / size → O(1)

💾 Space: O(n)

───────────────────────────────
🧠 Quick Review
───────────────────────────────
🔸 Concept: FIFO  
🔸 Core Ops: enqueue, dequeue, front, isEmpty, size  
🔸 Use: scheduling, BFS, queue systems  
🔸 Impl: Array / Linked List / Circular Queue  
🔸 Caution: underflow, overflow  
🔸 Variants: Circular Queue, Priority Queue, Deque  
───────────────────────────────
`
