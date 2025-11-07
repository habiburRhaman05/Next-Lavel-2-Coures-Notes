// 🎵 Node class — ছোট ছোট বাক্স, প্রতিটা একটা গান রাখবে
class Node {
  constructor(value) {
    this.value = value; // 🧱 মূল মান (গানের নাম বা ডেটা)
    this.next = null;   // 🔗 পরের নোডের ঠিকানা
  }
}

// 🎶 Linked List class — পুরো গান লিস্ট (head → tail)
class NewSongList {
  constructor() {
    this.head = null; // 🎯 প্রথম গান
    this.tail = null; // 🏁 শেষ গান
    this.size = 0;    // 📏 মোট গান সংখ্যা
  }

  /**
   * 🎧 Append → add node at the end (শেষে গান যোগ)
   */
  append(value) {
    const newNode = new Node(value);

    // যদি লিস্ট একদম খালি থাকে
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // পুরনো টেইলকে নতুনটার সাথে লিংক করো
      this.tail = newNode;      // নতুন টেইল সেট করো
    }

    this.size++;
    return this;
  }

  /**
   * 🎵 Prepend → add node at the start (শুরুর দিকে গান যোগ)
   */
  prepend(value) {
    const newNode = new Node(value);

    // নতুন নোড পুরনো head এর দিকে ইঙ্গিত করবে
    newNode.next = this.head;
    this.head = newNode;

    // যদি লিস্ট আগে খালি থাকতো, তাহলে tail ও update করতে হবে
    if (!this.tail) {
      this.tail = newNode;
    }

    this.size++;
    return this;
  }

  /**
   * 🎼 Insert → add node in the middle or specific index
   */
  insert(index, value) {
    // যদি index সীমার বাইরে হয়
    if (index < 0 || index > this.size) {
      console.error("⚠️ Index out of boundaries!");
      return undefined;
    }

    // শুরুতে insert করতে হলে
    if (index === 0) return this.prepend(value);

    // শেষে insert করতে হলে
    if (index === this.size) return this.append(value);

    // মাঝখানে insert করার সময়
    const newNode = new Node(value);
    const prevNode = this._traversingHead(index - 1);

    newNode.next = prevNode.next; // নতুন নোড → পরের নোডে লিংক করো
    prevNode.next = newNode;      // পুরনো নোড → নতুন নোডে লিংক করো

    this.size++;
    return this;
  }

  /**
   * ❌ Remove → remove node by index
   */
  remove(index) {
    // সীমা চেক করো
    if (index < 0 || index >= this.size) {
      console.error("⚠️ Index out of boundaries!");
      return undefined;
    }

    // প্রথম নোড রিমুভ
    if (index === 0) {
      this.head = this.head.next;
      this.size--;

      // যদি একটিমাত্র নোড থাকতো
      if (this.size === 0) this.tail = null;
      return this;
    }

    // আগের নোড খুঁজে বের করো
    const prevNode = this._traversingHead(index - 1);
    const nodeToRemove = prevNode.next;

    // পরের নোডে লিংক আপডেট
    prevNode.next = nodeToRemove.next;

    // যদি শেষ নোড রিমুভ হয়, tail আপডেট করো
    if (index === this.size - 1) {
      this.tail = prevNode;
    }

    this.size--;
    return this;
  }

  /**
   * 🔍 Helper → traverse and find node by index
   */
  _traversingHead(index) {
    if (index < 0 || index >= this.size) return undefined;
    let current = this.head;
    let count = 0;

    while (count < index) {
      current = current.next;
      count++;
    }
    return current;
  }

  /**
   * 📏 Get total size of list
   */
  getSize() {
    return this.size;
  }

  /**
   * 🧾 Print the full list with index
   */
  print() {
    let current = this.head;
    let index = 0;
    if (!current) {
      console.log("🚫 List is empty!");
      return;
    }

    while (current) {
      console.log(current.value);
      current = current.next;
      index++;
    }

    console.log(`📦 Total Songs: ${this.size}`);
  }
}

// ✅ TEST SECTION
// const songList = new NewSongList();
// songList.append("song a");
// songList.append("song e");
// songList.append("song f");
// songList.prepend("song x");
// songList.insert(2, "add a new song "); // insert in middle
// songList.remove(3); // remove one item

// songList.print();

// // OUTPUT EXPECTED:
// // 🎶 Song: Perfect (index: 0)
// // 🎶 Song: Shape of You (index: 1)
// // 🎶 Song: Let Me Love You (index: 2)
// // 🎶 Song: Believer (index: 3)
// // 📦 Total Songs: 4
// "x,a,new,f"




// 🎵 Queue based on Linked List
class SongQueue {
  constructor() {
    this.list = new NewSongList(); // Linked List দিয়ে কিউ তৈরি
  }

  /**
   * 🎶 Enqueue → add song at the end
   */
  enqueue(value) {
    this.list.append(value);
    console.log(`✅ Added to queue: ${value}`);
  }

  /**
   * 🎧 Dequeue → remove song from the front
   */
  dequeue() {
    if (this.isEmpty()) {
      console.log("🚫 Queue is empty!");
      return null;
    }

    const frontNode = this.list.head;
    this.list.remove(0);
    console.log(`⏩ Removed from queue: ${frontNode.value}`);
    return frontNode.value;
  }

  /**
   * 👀 Peek → see front song
   */
  peek() {
    if (this.isEmpty()) {
      console.log("🚫 Queue is empty!");
      return null;
    }
    console.log(`🎵 Now playing next: ${this.list.head.value}`);
    return this.list.head.value;
  }

  /**
   * ⚡ Check if queue is empty
   */
  isEmpty() {
    return this.list.getSize() === 0;
  }

  /**
   * 📏 Get queue size
   */
  getSize() {
    return this.list.getSize();
  }

  /**
   * 🧾 Print full queue
   */
  printQueue() {
    console.log("🎶 Current Queue:");
    this.list.print();
  }
}

// 🔹 Example usage
const myQueue = new SongQueue();
// myQueue.enqueue("1");
// myQueue.enqueue("2");
// myQueue.enqueue("3");

// myQueue.printQueue();

// myQueue.peek();
// myQueue.dequeue();
// myQueue.printQueue();


