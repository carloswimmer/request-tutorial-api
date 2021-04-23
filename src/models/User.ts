class User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address?: object;
  company?: object;
  static lastId: number;

  constructor(
    name: string,
    username: string,
    email: string,
    phone: string,
    website: string,
    address?: object,
    company?: object,
  ) {
    this.id = User.incrementId();
    this.name = name;
    this.username = username;
    this.email = email;
    this.address = address;
    this.phone = phone;
    this.website = website;
    this.company = company;
  }

  static incrementId(): number {
    if (!this.lastId) this.lastId = 11;
    else this.lastId++;
    return this.lastId;
  }
}

export default User;
