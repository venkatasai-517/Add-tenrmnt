import { useState, useEffect } from "react";
import firebaseDB from "./firebase";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { imgDB } from "./firebase"; // Ensure this import is correct

function App() {
  const [data1, setData1] = useState({
    date: "",
    name: "",
    adhar_num: "",
    mobile_num: "",
    status: "",
    room_number: "",
    floor_number: "",
    price: "",
    Tenant_img: "",
    due_date: "",
  });
  const [img, setImg] = useState(null);
  const [error, setError] = useState({
    adhar: "",
    mobile: "",
  });
  const [rooms, setRooms] = useState({});

  const aadhaarPattern = /^\d{12}$/;
  const mobilePattern = /^[6-9]\d{9}$/;

  useEffect(() => {
    const fetchData = async () => {
      const roomData = {};
      const roomCategories = [
        "G1",
        "G2",
        "A1",
        "A2",
        "A3",
        "A4",
        "A5",
        "A6",
        "A7",
        "B1",
        "B2",
        "B3",
        "B4",
        "B5",
        "B6",
        "C1",
        "C2",
        "C3",
        "C4",
      ];

      for (const category of roomCategories) {
        const snapshot = await firebaseDB.child(category).once("value");
        const data = snapshot.val();
        if (data) {
          roomData[category] = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
        } else {
          roomData[category] = [];
        }
      }

      setRooms(roomData);
    };

    fetchData();
  }, []);

  const handleFileUpload = async (file) => {
    if (!file) return;
    const imgRef = ref(imgDB, `file/${v4()}`);
    await uploadBytes(imgRef, file);
    const url = await getDownloadURL(imgRef);
    return url;
  };
  const roomCapacities = {
    G1: 6,
    G2: 6,
    // Add more rooms and their capacities here
    A1: 6,
    A2: 6,
    A3: 2,
    A4: 5,
    A5: 3,
    A6: 1,
    A7: 2,
    B1: 6,
    B2: 6,
    B3: 3,
    B4: 4,
    B5: 6,
    B6: 1,
    C1: 1,
    C2: 1,
    C3: 1,
    C4: 1,

    // and so on...
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    // Validate Aadhaar Number
    if (data1.adhar_num.trim() === "") {
      setError({ ...error, adhar: "Enter Aadhaar Number" });
      return;
    } else if (!aadhaarPattern.test(data1.adhar_num)) {
      setError({ ...error, adhar: "Enter valid Aadhaar Number" });
      return;
    } else {
      setError({ ...error, adhar: "" });
    }

    // Validate Mobile Number
    if (data1.mobile_num.trim() === "") {
      setError({ ...error, mobile: "Enter Mobile Number" });
      return;
    } else if (!mobilePattern.test(data1.mobile_num)) {
      setError({ ...error, mobile: "Enter valid Mobile Number" });
      return;
    } else {
      setError({ ...error, mobile: "" });
    }

    const room_number = data1.room_number; // Make sure room_number is part of your form data
    const roomCapacity = roomCapacities[room_number] || 6; // Default to 6 if room not listed

    const snapshot = await firebaseDB.child(room_number).get();
    if (
      snapshot.exists() &&
      Object.keys(snapshot.val()).length >= roomCapacity
    ) {
      alert(`You cannot add more than ${roomCapacity} records in this room.`);
      return;
    }

    try {
      const url = await handleFileUpload(img);
      const formDataWithImgUrl = { ...data1, student_img: url };
      await firebaseDB.child(room_number).push(formDataWithImgUrl);
      alert("Data saved successfully!");

      // Clear form fields and state after successful submission
      setData1({
        date: "",
        name: "",
        adhar_num: "",
        mobile_num: "",
        status: "",
        room_number: "",
        floor_number: "",
        price: "",
        student_img: "",
      });
      setImg(null);
    } catch (error) {
      console.error("Error saving data:", error);
      // Handle error as needed (e.g., show error message)
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;

    if (name === "date") {
      setData1({
        ...data1,
        [name]: value,
        due_date: calculateDueDate(value),
      });
    } else {
      setData1({ ...data1, [name]: value });
    }
  };

  const calculateDueDate = (dateOfJoin) => {
    const dueDate = new Date(dateOfJoin);
    dueDate.setDate(dueDate.getDate() + 30);
    return dueDate.toISOString().split("T")[0];
  };

  return (
    <div className="relative">
      <div className="container mt-3">
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          id="exampleModal"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog bg-white rounded-lg shadow-lg max-w-lg w-full mx-4">
            <div className="modal-content">
              <div className="modal-header border-b p-4 flex justify-between items-center">
                <h1 className="text-lg font-semibold" id="exampleModalLabel">
                  Add Tenant
                </h1>
              </div>
              <div className="modal-body p-4">
                <form onSubmit={submitHandler}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Date
                      </label>
                      <input
                        type="date"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        name="date"
                        value={data1.date}
                        onChange={changeHandler}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Tenant Name
                      </label>
                      <input
                        type="text"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        name="name"
                        value={data1.name}
                        onChange={changeHandler}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Aadhaar Number
                      </label>
                      <input
                        type="text"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        name="adhar_num"
                        value={data1.adhar_num}
                        onChange={changeHandler}
                        required
                      />
                      {error.adhar && (
                        <p className="text-red-500 text-xs mt-1">
                          {error.adhar}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Mobile Number
                      </label>
                      <input
                        type="text"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        name="mobile_num"
                        value={data1.mobile_num}
                        onChange={changeHandler}
                        required
                      />
                      {error.mobile && (
                        <p className="text-red-500 text-xs mt-1">
                          {error.mobile}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Status
                      </label>
                      <select
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        name="status"
                        value={data1.status}
                        onChange={changeHandler}
                        required
                      >
                        <option value="" disabled>
                          Choose...
                        </option>
                        <option value="Joined">Joined</option>
                        <option value="Vacated">Vacated</option>
                        <option value="Under Maintenance">
                          Under Maintenance
                        </option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Room Number
                      </label>
                      <input
                        type="text"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        name="room_number"
                        value={data1.room_number}
                        onChange={changeHandler}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Floor
                      </label>
                      <input
                        type="text"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        name="floor_number"
                        value={data1.floor_number}
                        onChange={changeHandler}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Price
                      </label>
                      <div className="relative mt-1">
                        <input
                          type="number"
                          className="block w-full border-gray-300 rounded-md shadow-sm pl-7 pr-3 py-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          name="price"
                          value={data1.price}
                          onChange={changeHandler}
                          placeholder="0.00"
                          step="0.01"
                          min="0"
                          required
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500">$</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Tenant Image
                      </label>
                      <input
                        type="file"
                        name="Tenant_img"
                        className="mt-1 block w-full text-sm text-gray-500 border border-gray-300 rounded-md shadow-sm"
                        onChange={(e) => setImg(e.target.files[0])}
                      />
                    </div>
                    <button
                      type="submit"
                      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
