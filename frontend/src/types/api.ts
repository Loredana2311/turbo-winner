// manually maintained API types

export type Service = {
  id: number;
  name: string;
  description?: string;
  duration: number;
  price: number;
};

export type Therapist = {
  id: number;
  name: string;
  email: string;
  phone?: string;
  bio?: string;
};

export type Appointment = {
  id: number;
  user_id: number;
  service_id: number;
  therapist_id: number;
  starts_at: string;
  status: "pending" | "confirmed" | "cancelled" | "completed";
};

// convenience path types

type Paths = {
  "/services": {
    get: Service[];
  };
  "/services/{id}": {
    get: Service;
  };
  "/therapists": {
    get: Therapist[];
  };
  "/therapists/{id}": {
    get: Therapist;
  };
  "/appointments": {
    post: Appointment;
  };
};
